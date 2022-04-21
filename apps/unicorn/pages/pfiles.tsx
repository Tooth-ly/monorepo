import { Flex, Grid } from '@chakra-ui/react';
import { NextLayoutComponentType } from 'next';
import { useRouter } from 'next/router';
import React from 'react';
import styled from 'styled-components';
import { PFilesCard } from '../components/PFilesCard';
import Layout from '../layouts/Layout';
import NavBar from '../components/NavBar/index';
import { useFilesQuery } from 'libs/generated/graphql';

interface pfilesProps {}

const pfiles: NextLayoutComponentType<pfilesProps> = ({}) => {
  const router = useRouter();

  // fetching patient files
  const { data: patientFilesData, loading, error } = useFilesQuery();

  return (
    <Flex w="100%" flexDir={'column'}>
      <NavBar />
      <Container>
        <Title>Patient Files</Title>
        <Grid
          paddingLeft={25}
          paddingRight={25}
          templateColumns={'repeat(auto-fill, minmax(200px, 1fr))'}
          columnGap={10}
          rowGap={7}
        >
          {!error.message &&
            !loading &&
            patientFilesData.files.map((pfile) => (
              <div
                key={pfile.file_number}
                onClick={() => router.push(`/Patient/${pfile.file_number}`)}
              >
                <PFilesCard data={pfile} key={pfile.file_number} />
              </div>
            ))}
        </Grid>
      </Container>
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
