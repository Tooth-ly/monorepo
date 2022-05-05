import { Box, Flex, Grid, Spinner, useMediaQuery } from '@chakra-ui/react';
import { useFilesQuery, usePatientsQuery } from 'libs/generated/graphql';
import { NextLayoutComponentType } from 'next';
import { useRouter } from 'next/router';
import React from 'react';
import styled from 'styled-components';
import NavBar from '../components/NavBar/index';
import { PatientCard } from '../components/PatientCard';
import { PFilesCard } from '../components/PFilesCard';
import Layout from '../layouts/Layout';

interface pfilesProps {}

const pfiles: NextLayoutComponentType<pfilesProps> = ({}) => {
  const router = useRouter();

  // fetching patient files
  const {
    data: patientFilesData,
    loading: isPatientFilesLoading,
    error: patientFilesError,
  } = useFilesQuery();

  // fetching patients data
  const {
    data: patientsData,
    loading: isPatientsLoading,
    error: patientsError,
  } = usePatientsQuery();

  const [isLargerThan600] = useMediaQuery('(min-width: 600px)');

  return (
    <Flex w="100%" flexDir={'column'}>
      <NavBar />
      {typeof window != 'undefined' && (
        <Grid templateColumns={isLargerThan600 ? 'repeat(2, 1fr)' : '1fr'}>
          <Box>
            <Title>Patients</Title>
            <Grid
              paddingLeft={25}
              paddingRight={25}
              templateColumns={'repeat(auto-fill, minmax(200px, 1fr))'}
              columnGap={10}
              rowGap={7}
            >
              {isPatientsLoading ? (
                <Spinner />
              ) : (
                !patientsError &&
                patientsData && (
                  <>
                    {patientsData.patients.map((patientData) => (
                      <PatientCard
                        patientData={patientData}
                        key={patientData.id}
                      />
                    ))}

                    <PatientCard empty={true} />
                  </>
                )
              )}
            </Grid>
          </Box>
          <Container>
            <Title>Patient Files</Title>
            <Grid
              paddingLeft={25}
              paddingRight={25}
              templateColumns={'repeat(auto-fill, minmax(200px, 1fr))'}
              columnGap={10}
              rowGap={7}
            >
              {isPatientFilesLoading ? (
                <Spinner />
              ) : (
                patientFilesData.files.files &&
                !patientFilesError &&
                patientFilesData.files.files.map((pfile) => (
                  <div
                    key={pfile.file_number}
                    onClick={() => router.push(`/File/${pfile.file_number}`)}
                  >
                    <PFilesCard fileData={pfile} key={pfile.file_number} />
                  </div>
                ))
              )}
              <PFilesCard createMode={true} />
            </Grid>
          </Container>
        </Grid>
      )}
    </Flex>
  );
};

pfiles.getLayout = (page) => <Layout layoutType="Default">{page}</Layout>;

const Title = styled.p({
  fontSize: '25px',
  fontWeight: 'bold',
  textDecoration: 'none',
  cursor: 'pointer',
  padding: '25px',
});

const Container = styled.div`
  font-family: 'Sans';
  width: 100%;
`;
export default pfiles;
