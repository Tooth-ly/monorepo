import Layout from 'apps/unicorn/layouts/Layout';
import { NextLayoutComponentType } from 'next';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import {
  useAddServiceMutation,
  useFileQuery,
  usePatientQuery,
} from 'libs/generated/graphql';
import { Container, Flex, Grid } from '@chakra-ui/react';
import NavBar from 'apps/unicorn/components/NavBar';
import { PatientMenu } from 'apps/unicorn/components/PatientMenu';

interface addServiceProps {}

const addService: NextLayoutComponentType<addServiceProps> = ({}) => {
  const router = useRouter();
  const id = router.query.patientId as unknown as number;

  const [assignee_id, setAssigneeId] = useState(0);
  const [service_id, setServiceId] = useState();

  const [addServiceMutation, { data, loading, error }] = useAddServiceMutation({
    variables: {
      input: {
        assignee_id,
        patient_id: id,
        service_id,
      },
    },
  });

  const { data: patientData, loading: loadingfPatientQuery } = usePatientQuery({
    variables: { patientId: id },
  });

  if (patientData) {
    const { data: patientFile } = useFileQuery({
      variables: {
        fileNumber: patientData.patient?.file_number,
      },
    });

    return (
      <>
        {patientFile.file && patientData.patient ? (
          <Flex flexDir={'column'}>
            <NavBar />
            <Container>
              <PatientMenu
                id={id}
                name={patientData.patient.name}
                profileUrl={patientFile.file.photo_url}
              />
              <Grid
                templateColumns={'repeat(auto-fit, minmax(300px, 1fr))'}
                m={'0px 20px'}
              >
                add service
              </Grid>
            </Container>
          </Flex>
        ) : (
          <>patient doesn't exist</>
        )}
      </>
    );
  }
  return <>loading...</>;
};

addService.getLayout = (page) => <Layout layoutType="NoBgColor">{page}</Layout>;

export default addService;
