import { AddIcon } from '@chakra-ui/icons';
import { Box, Flex, Grid, Text, useDisclosure } from '@chakra-ui/react';
import {
  useAddServiceMutation,
  ServiceLog,
  HrAssignee,
  useTasksByServiceQuery,
  File,
} from 'libs/generated/graphql';
import { useRouter } from 'next/router';
import React, { useRef } from 'react';
import { ServiceModal } from '../Modals/AddServiceModal';
import { Task } from '../Task';
import {
  InnerServiceDone,
  InnerServiceInProgress,
  InnerServiceNew,
} from './styled';

interface PatientServiceProps {
  serviceData?: ServiceLog;
  pFileData: File;
}

export const PatientService: React.FC<PatientServiceProps> = ({
  serviceData,
  pFileData
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
  const {patient_id, file_number} = pFileData

  // tasks
  const {
    data: tasks,
    error: taskError,
    loading: taskLoading,
  } = useTasksByServiceQuery({
    variables: {
      sid: serviceData.id,
    },
  });


  if (serviceData && tasks && !taskError && !taskLoading)
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
            serviceData.filenumber == file_number &&
            serviceData.type == 'New' ? (
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
              <Box
                {/* replace by modal */}
                m={'7px'}
                onClick={() => router.push(`/Task/createTask`)}
              >
                <Task plusSign={true} />
              </Box>
            )}
          </InnerServiceNew>
          <InnerServiceInProgress>
            In Progress
            {tasks.tasksByService.length > 0 &&
            serviceData.patient_id == patient_id &&
            serviceData.serviceType == 'In Progress' ? (
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
                    router.push(`/Patient/${patientId}/createTask`)
                  }
                >
                  <Task plusSign={true} />
                </Box>
              </>
            ) : (
              <Box
                m={'7px'}
                onClick={() => router.push(`/File/${patientId}/createTask`)}
              >
                <Task plusSign={true} />
              </Box>
            )}
          </InnerServiceInProgress>
          <InnerServiceDone>
            Done
            {tasks.tasksByService.length > 0 &&
            serviceData.patient_id == patientId &&
            serviceData.serviceType == 'Done' ? (
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
        onClick={onOpen}
      >
        <AddIcon w={50} h={50} m={10} />
        <ServiceModal
          initialRef={initialRef}
          isOpen={isOpen}
          onOpen={onOpen}
          onClose={onClose}
          finalRef={finalRef}
        />
      </Flex>
    );
};
