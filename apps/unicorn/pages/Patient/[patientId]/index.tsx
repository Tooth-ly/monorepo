import { NextLayoutComponentType } from 'next';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { PFiles, ServicesData } from '../../../data';
import { PatientMenu } from '../../../components/PatientMenu';
import Layout from '../../../layouts/Layout';
import { PatientService } from '../../../components/PatientService';
import { Flex, Grid } from '@chakra-ui/react';
import { useMediaQuery } from '@chakra-ui/react';
import NavBar from '../../../components/NavBar';

interface PatientProps {}
const Patient: NextLayoutComponentType<PatientProps> = ({}) => {
  const [isLargerThan600, isDisplayingInBrowser] = useMediaQuery([
    '(min-width: 600px)',
    '(display-mode: browser)',
  ]);

  const router = useRouter();
  const id = router.query.patientId as unknown as number;
  const patientFile: PFiles[] = PFiles.filter((v) => v.id == id);
  if (patientFile && patientFile.length > 0) {
    const { id, name, status, profileUrl } = patientFile[0];

    if (isDisplayingInBrowser)
      if (!isLargerThan600) {
        return (
          <Flex>
            <NavBar />
            <Container>
              <PatientMenu
                id={id}
                name={name}
                status={status}
                profileUrl={profileUrl}
              />
              <Grid
                templateColumns={'repeat(auto-fit, minmax(300px, 1fr))'}
                m={'0px 20px'}
              >
                {ServicesData.map((serviceData) => {
                  if (serviceData.patientId == id)
                    return (
                      <PatientService
                        key={serviceData.id}
                        serviceData={serviceData}
                      />
                    );
                })}
                <PatientService />
              </Grid>
            </Container>
          </Flex>
        );
      } else
        return (
          <Flex w="100%" mt={0}>
            <NavBar />
            <Container600>
              <PatientMenu
                id={id}
                name={name}
                status={status}
                profileUrl={profileUrl}
              />
              <Grid
                templateColumns={'repeat(auto-fill, minmax(400px, 1fr))'}
                gap={4}
                m={'20px'}
              >
                {ServicesData.map((serviceData) => {
                  if (serviceData.patientId == id)
                    return (
                      <PatientService
                        key={serviceData.id}
                        serviceData={serviceData}
                      />
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

Patient.getLayout = (page) => <Layout layoutType="NoBgColor">{page}</Layout>;

export default Patient;
