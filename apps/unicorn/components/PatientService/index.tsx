import { Box, Grid, Text, useDisclosure } from '@chakra-ui/react';
import {
  File,
  ServiceLog,
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
  // modal
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = useRef();
  const finalRef = useRef();

  // pfile
  const { patient_id, file_number, assignee_id } = pFileData;

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
        <Text fontWeight={600}>Service: {serviceData.service.name}</Text>
        <Grid
          templateColumns={'repeat(auto-fit, minmax(100px, 1fr))'}
          gap={2}
          textAlign={'center'}
          mt={'10px'}
        >
          <InnerServiceNew>
            New
            {tasks && tasks.tasksByService.length > 0 ? (
              <>
                {tasks.tasksByService.map((task) => (
                  <Box m={'7px'} key={task.name}>
                    <Task title={task.name} content={task.description} />
                  </Box>
                ))}

                {/* replace by modal */}
                <Box m={'7px'}>
                  <Task plusSign={true} />
                </Box>
              </>
            ) : (
              <Box m={'7px'}>
                <Task plusSign={true} />
              </Box>
            )}
          </InnerServiceNew>
          <InnerServiceInProgress>
            In Progress
            {tasks && tasks.tasksByService.length > 0 ? (
              <>
                {tasks.tasksByService.map((task) => (
                  <>
                    <Box m={'7px'} key={task.id}>
                      <Task title={task.name} content={task.description} />
                    </Box>
                  </>
                ))}
                <Box m={'7px'}>
                  <Task plusSign={true} />
                </Box>
              </>
            ) : (
              <Box m={'7px'}>
                <Task plusSign={true} />
              </Box>
            )}
          </InnerServiceInProgress>
          <InnerServiceDone>
            Done
            {tasks && tasks.tasksByService.length > 0 ? (
              <>
                {tasks.tasksByService.map((task) => (
                  <>
                    <Box m={'7px'} key={task.id}>
                      <Task title={task.name} content={task.description} />
                    </Box>
                  </>
                ))}
                <Box m={'7px'}>
                  <Task plusSign={true} />
                </Box>
              </>
            ) : (
              <>
                <Box m={'7px'}>
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
        assignee_id={assignee_id}
        patient_id={patient_id}
        filenumber={file_number}
      />
    );
};
