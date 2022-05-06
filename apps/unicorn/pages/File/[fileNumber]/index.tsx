import { Flex, Grid, useDisclosure, useMediaQuery } from '@chakra-ui/react';
import { AddPatientService } from 'apps/unicorn/components/AddPatientService';
import { ServiceLogWrapper } from 'apps/unicorn/components/ServiceLogWrapper';
import { useFileQuery, useMeQuery } from 'libs/generated/graphql';
import { NextLayoutComponentType } from 'next';
import { useRouter } from 'next/router';
import { useRef } from 'react';
import styled from 'styled-components';
import NavBar from '../../../components/NavBar';
import { PatientMenu } from '../../../components/PatientMenu';
import { PatientService } from '../../../components/PatientService';
import Layout from '../../../layouts/Layout';

interface PatientProps {}

const Patient: NextLayoutComponentType<PatientProps> = ({}) => {
  const [isLargerThan600, isDisplayingInBrowser] = useMediaQuery([
    '(min-width: 600px)',
    '(display-mode: browser)',
  ]);

  const router = useRouter();
  const id = parseInt(router.query.fileNumber as string);

  // modal
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = useRef();
  const finalRef = useRef();

  // patient file data
  const {
    data: pFileData,
    error: pFileError,
    loading: pFileLoading,
  } = useFileQuery({
    variables: { fileNumber: id },
  });

  // assignee data
  const {
    data: assigneeData,
    loading: assigneeLoading,
    error: assigneeError,
  } = useMeQuery();

  if (
    !assigneeLoading &&
    !assigneeError &&
    assigneeData &&
    pFileData &&
    !pFileError &&
    !pFileLoading
  ) {
    const { file_number, patient_id } = pFileData.file.file;

    if (isDisplayingInBrowser)
      if (!isLargerThan600) {
        return (
          <Flex flexDir={'column'}>
            <NavBar />
            <Container>
              <PatientMenu pFileData={pFileData.file.file} />
              <Grid
                templateColumns={'repeat(auto-fit, minmax(300px, 1fr))'}
                m={'0px 20px'}
              >
                <ServiceLogWrapper
                  assigneeData={assigneeData.me}
                  pFileData={pFileData.file.file}
                />
                <AddPatientService
                  finalRef={finalRef}
                  initialRef={initialRef}
                  isOpen={isOpen}
                  onClose={onClose}
                  onOpen={onOpen}
                  assignee_id={assigneeData.me.id}
                  patient_id={patient_id}
                  filenumber={file_number}
                />
              </Grid>
            </Container>
          </Flex>
        );
      } else
        return (
          <Flex w="100%" mt={0} flexDir={'column'}>
            <NavBar />
            <Container600>
              <PatientMenu pFileData={pFileData.file.file} />
              <Grid
                templateColumns={'repeat(auto-fill, minmax(400px, 1fr))'}
                gap={4}
                m={'20px'}
              >
                <ServiceLogWrapper
                  assigneeData={assigneeData.me}
                  pFileData={pFileData.file.file}
                />
                <PatientService pFileData={pFileData.file.file} />
              </Grid>
            </Container600>
          </Flex>
        );
  } else {
    return <Container>Patient File Not Found!</Container>;
  }
};

const Container = styled.div({
  fontFamily: 'Sans',
  marginTop: '10px',
  width: '100%',
  marginBottom: '20%',
});

const Container600 = styled.div({
  fontFamily: 'Sans',
  marginTop: '10px',
  width: '100%',
});

Patient.getLayout = (page) => <Layout layoutType="Default">{page}</Layout>;

export default Patient;
