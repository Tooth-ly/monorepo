import { Box, Grid, Text, useDisclosure } from '@chakra-ui/react';
import {
  File,
  ServiceLog,
  ServiceType,
  useServiceQuery,
  useTasksByServiceQuery,
} from 'libs/generated/graphql';
import { useRouter } from 'next/router';
import React, { useRef } from 'react';
import { AddPatientService } from '../AddPatientService';
import { Task } from '../Task';
import {
  InnerServiceDone,
  InnerServiceInProgress,
  InnerServiceNew,
} from './styled';

interface PatientServiceProps {
  serviceLogData?: ServiceLog;
  pFileData: File;
}

export const PatientService: React.FC<PatientServiceProps> = ({
  pFileData,
  serviceLogData,
}) => {
  const router = useRouter();

  // modal
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = useRef();
  const finalRef = useRef();

  // const addService = useAddServiceMutation({
  //   variables: {
  //     input: {
  //       patient_id: serviceData.patient_id,
  //       service_id: serviceData.id,
  //       assignee_id: assigneeData.id,
  //     },
  //   },
  // });

  // pfile
  const { patient_id, file_number } = pFileData;

  if (serviceLogData) {
    // tasks
    const { data: tasks } = useTasksByServiceQuery({
      variables: {
        sid: serviceLogData.id,
      },
    });

    // service
    const { data: serviceData } = useServiceQuery({
      variables: { serviceId: serviceLogData.service_id },
    });
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
            {tasks.tasksByService.length > 0 &&
            serviceLogData.filenumber == file_number &&
            serviceData.service.type == ServiceType.New ? (
              <>
                {tasks.tasksByService.map((task) => (
                  <Box m={'7px'} key={task.name}>
                    <Task title={task.name} content={task.description} />
                  </Box>
                ))}
                {/* replace by modal */}
                <Box m={'7px'} onClick={() => router.push(`/Task/createTask`)}>
                  <Task plusSign={true} />
                </Box>
              </>
            ) : (
              <Box m={'7px'} onClick={() => router.push(`/Task/createTask`)}>
                <Task plusSign={true} />
              </Box>
            )}
          </InnerServiceNew>
          <InnerServiceInProgress>
            In Progress
            {tasks.tasksByService.length > 0 &&
            serviceLogData.patient_id == patient_id &&
            serviceData.service.type == ServiceType.InProgress ? (
              <>
                {tasks.tasksByService.map((task) => (
                  <>
                    <Box m={'7px'} key={task.id}>
                      <Task title={task.name} content={task.description} />
                    </Box>
                  </>
                ))}
                <Box
                  m={'7px'}
                  onClick={() =>
                    router.push(`/Patient/${patient_id}/createTask`)
                  }
                >
                  <Task plusSign={true} />
                </Box>
              </>
            ) : (
              <Box
                m={'7px'}
                onClick={() => router.push(`/File/${patient_id}/createTask`)}
              >
                <Task plusSign={true} />
              </Box>
            )}
          </InnerServiceInProgress>
          <InnerServiceDone>
            Done
            {tasks.tasksByService.length > 0 &&
            serviceLogData.patient_id == patient_id &&
            serviceData.service.type == ServiceType.Done ? (
              <>
                {tasks.tasksByService.map((task) => (
                  <>
                    <Box m={'7px'} key={task.id}>
                      <Task title={task.name} content={task.description} />
                    </Box>
                  </>
                ))}
                <Box
                  m={'7px'}
                  onClick={() =>
                    router.push(`/Patient/${patient_id}/createTask`)
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
                    router.push(`/Patient/${patient_id}/createTask`)
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
  } else
    return (
      <AddPatientService
        finalRef={finalRef}
        initialRef={initialRef}
        isOpen={isOpen}
        onClose={onClose}
        onOpen={onOpen}
      />
    );
};
