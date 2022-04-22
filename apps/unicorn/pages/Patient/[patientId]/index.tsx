import { Flex, Grid, useMediaQuery } from '@chakra-ui/react';
import {
  useFileQuery,
  useMeQuery,
  usePatientQuery,
  useServicelogsByFilenumberQuery,
} from 'libs/generated/graphql';
import { NextLayoutComponentType } from 'next';
import { useRouter } from 'next/router';
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
  const id = router.query.patientId as unknown as number;

  // assignee data
  const { data: assigneeData } = useMeQuery();

  // patient
  const { data: patientData } = usePatientQuery({
    variables: {
      patientId: id,
    },
  });

  // patient file
  const { data: patientFileData } = useFileQuery({
    variables: {
      fileNumber: patientData.patient.file_number,
    },
  });

  // service logs
  const { data: serviceLogsData } = useServicelogsByFilenumberQuery({
    variables: {
      filenumber: patientData.patient.file_number,
    },
  });

  if (patientFileData && patientFileData) {
    const { photo_url } = patientFileData.file;

    if (isDisplayingInBrowser)
      if (!isLargerThan600) {
        return (
          <Flex flexDir={'column'}>
            <NavBar />
            <Container>
              <PatientMenu
                id={id}
                name={patientData.patient.name}
                profileUrl={photo_url}
              />
              <Grid
                templateColumns={'repeat(auto-fit, minmax(300px, 1fr))'}
                m={'0px 20px'}
              >
                {serviceLogsData.servicelogsByFilenumber.map((serviceLog) => {
                  if (serviceLog.patient_id == id)
                    return (
                      <div>
                        <PatientService
                          key={serviceLog.id}
                          serviceData={serviceLog}
                          assigneeId={assigneeData.me.id}
                        />
                      </div>
                    );
                })}
                <PatientService />
              </Grid>
            </Container>
          </Flex>
        );
      } else
        return (
          <Flex w="100%" mt={0} flexDir={'column'}>
            <NavBar />
            <Container600>
              <PatientMenu
                id={id}
                name={patientData.patient.name}
                // status={patientFileData.file.status}
                profileUrl={patientFileData.file.photo_url}
              />
              <Grid
                templateColumns={'repeat(auto-fill, minmax(400px, 1fr))'}
                gap={4}
                m={'20px'}
              >
                {assigneeData &&
                  serviceLogsData.servicelogsByFilenumber.map((serviceLog) => {
                    if (serviceLog.patient_id == id)
                      return (
                        <div>
                          <PatientService
                            key={serviceLog.id}
                            serviceData={serviceLog}
                            assigneeId={assigneeData.me.id}
                          />
                        </div>
                      );
                  })}
                <PatientService />
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
