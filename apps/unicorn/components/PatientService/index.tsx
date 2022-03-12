import { AddIcon } from '@chakra-ui/icons';
import { Box, Flex, Grid, Text, useDisclosure } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React from 'react';
import { Service } from '../../data';
import { Task } from '../Task';
import {
  InnerServiceDone,
  InnerServiceInProgress,
  InnerServiceNew,
} from './styled';

interface PatientServiceProps {
  serviceData?: Service;
}

export const PatientService: React.FC<PatientServiceProps> = ({
  serviceData,
}) => {
  const router = useRouter();
  const patientId = router.query.patientId as unknown as number;

  if (serviceData && patientId)
    return (
      <Box
        backgroundColor={'#dedede'}
        borderRadius={'10px'}
        margin={'10px 0px'}
        padding={'15px'}
        shadow={'lg'}
      >
        <Text fontWeight={600}>Service</Text>
        <Grid
          templateColumns={'repeat(auto-fit, minmax(100px, 1fr))'}
          gap={2}
          textAlign={'center'}
          mt={'10px'}
        >
          <InnerServiceNew>
            New
            {serviceData.tasks.length > 0 &&
            serviceData.patientId == patientId &&
            serviceData.serviceType == 'New' ? (
              <>
                {serviceData.tasks.map((task) => (
                  <Box m={'7px'} key={task.title}>
                    <Task title={task.title} content={task.content} />
                  </Box>
                ))}
                <Box
                  m={'7px'}
                  onClick={() =>
                    router.push(`/Patient/${patientId}/createTask`)
                  }
                >
                  <Task plusSign={true} />
                </Box>
              </>
            ) : (
              <Box
                m={'7px'}
                onClick={() => router.push(`/Patient/${patientId}/createTask`)}
              >
                <Task plusSign={true} />
              </Box>
            )}
          </InnerServiceNew>
          <InnerServiceInProgress>
            In Progress
            {serviceData.tasks.length > 0 &&
            serviceData.patientId == patientId &&
            serviceData.serviceType == 'In Progress' ? (
              <>
                {serviceData.tasks.map((task) => (
                  <>
                    <Box m={'7px'} key={task.title}>
                      <Task title={task.title} content={task.content} />
                    </Box>
                  </>
                ))}
                <Box
                  m={'7px'}
                  onClick={() =>
                    router.push(`/Patient/${patientId}/createTask`)
                  }
                >
                  <Task plusSign={true} />
                </Box>
              </>
            ) : (
              <Box
                m={'7px'}
                onClick={() => router.push(`/Patient/${patientId}/createTask`)}
              >
                <Task plusSign={true} />
              </Box>
            )}
          </InnerServiceInProgress>
          <InnerServiceDone>
            Done
            {serviceData.tasks.length > 0 &&
            serviceData.patientId == patientId &&
            serviceData.serviceType == 'Done' ? (
              <>
                {serviceData.tasks.map((task) => (
                  <>
                    <Box m={'7px'} key={task.title}>
                      <Task title={task.title} content={task.content} />
                    </Box>
                  </>
                ))}
                <Box
                  m={'7px'}
                  onClick={() =>
                    router.push(`/Patient/${patientId}/createTask`)
                  }
                >
                  <Task plusSign={true} />
                </Box>
              </>
            ) : (
              <>
                <Box
                  m={'7px'}
                  onClick={() =>
                    router.push(`/Patient/${patientId}/createTask`)
                  }
                >
                  <Task plusSign={true} />
                </Box>
              </>
            )}
          </InnerServiceDone>
        </Grid>
      </Box>
    );
  else
    return (
      <Flex
        backgroundColor={'#dedede'}
        borderRadius={'10px'}
        m={'10px 0px'}
        p={'10px'}
        justifyContent={'center'}
        alignItems={'center'}
        onClick={() => router.push(`/Patient/${patientId}/createService`)}
      >
        <AddIcon w={50} h={50} m={10} />
      </Flex>
    );
};
