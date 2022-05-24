import { Box, Grid, Text, useDisclosure } from '@chakra-ui/react';
import {
  ServiceLog,
  Stage,
  useServiceQuery,
  useTasksByServiceQuery,
} from 'libs/generated/graphql';
import React, { useRef } from 'react';
import { NewTaskModal } from '../NewTaskModal';
import { Task } from '../Task';
import {
  InnerServiceDone,
  InnerServiceInProgress,
  InnerServiceNew,
} from './styled';

interface PatientServiceProps {
  serviceLogData: ServiceLog;
}

export const PatientService: React.FC<PatientServiceProps> = ({
  serviceLogData,
}) => {
  // tasks
  const { data: tasks } = useTasksByServiceQuery({
    variables: {
      serviceLogId: serviceLogData.id,
    },
  });

  // service
  const { data: serviceData, loading: serviceLoading } = useServiceQuery({
    variables: { serviceId: serviceLogData.service_id },
  });

  // new task modal
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = useRef();
  const finalRef = useRef();

  // tasks
  const newTasks =
    tasks && tasks.tasksByService.filter((task) => task.stage === Stage.New);

  const pendingTasks =
    tasks &&
    tasks.tasksByService.filter((task) => task.stage === Stage.Pending);

  const doneTasks =
    tasks && tasks.tasksByService.filter((task) => task.stage === Stage.Done);

  if (serviceData && tasks && !serviceLoading)
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
          autoRows={'1fr'}
          mt={'10px'}
        >
          <InnerServiceNew>
            New
            {newTasks.length > 0 ? (
              <>
                {newTasks.map((task) => (
                  <Box m={'7px'} key={task.name}>
                    <Task title={task.name} content={task.description} />
                  </Box>
                ))}

                {/* replace by modal */}
                <Box m={'7px'} onClick={() => console.log('yeet?')}>
                  <Task plusSign={true} />
                </Box>
                <NewTaskModal
                  finalRef={finalRef}
                  initialRef={initialRef}
                  isOpen={isOpen}
                  onClose={onClose}
                  serviceLogId={serviceLogData.id}
                />
              </>
            ) : (
              <Box m={'7px'} onClick={onOpen}>
                <Task plusSign={true} />
                <NewTaskModal
                  finalRef={finalRef}
                  initialRef={initialRef}
                  isOpen={isOpen}
                  onClose={onClose}
                  serviceLogId={serviceLogData.id}
                />
              </Box>
            )}
          </InnerServiceNew>
          <InnerServiceInProgress>
            Pending
            {pendingTasks.length > 0 ? (
              <>
                {pendingTasks.map((task) => (
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
            {doneTasks.length > 0 ? (
              <>
                {doneTasks.map((task) => (
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
  else return null;
};
