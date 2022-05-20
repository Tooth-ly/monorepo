import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
} from '@chakra-ui/react';
import { Form, Formik } from 'formik';
import {
  CreateTaskDocument,
  CreateTaskMutation,
  Stage,
  Task_Input,
  useCreateTaskMutation,
} from 'libs/generated/graphql';
import React, { MutableRefObject, useState } from 'react';
import { InputField } from '../InputField';

interface NewTaskModalProps {
  finalRef: MutableRefObject<undefined>;
  initialRef: MutableRefObject<undefined>;
  onClose: () => void;
  isOpen: boolean;
  serviceLogId: number;
}

export const NewTaskModal: React.FC<NewTaskModalProps> = ({
  finalRef,
  initialRef,
  isOpen,
  onClose,
  serviceLogId,
}) => {
  const [name, setName] = useState('');
  const [stage, setStage] = useState(Stage.New);
  const [reqLoadingStatus, setReqLoadingStatus] = useState(false);

  const initialValues: Task_Input = {
    name: name,
    date: Date.now() + '',
    service_log_id: null,
    stage: stage,
    assignee_notes: '',
    description: '',
  };

  const [createTask] = useCreateTaskMutation();

  return (
    <>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <Formik
            initialValues={initialValues}
            onSubmit={async (values) => {
              console.log('patient card modal values', {
                ...values,
                stage,
                name,
              });

              setReqLoadingStatus(true);
              await createTask({
                variables: {
                  input: {
                    ...values,
                    stage,
                    name,
                    service_log_id: serviceLogId,
                  },
                },
                update: (cache, { data }) => {
                  cache.writeQuery<CreateTaskMutation>({
                    query: CreateTaskDocument,
                    data: {
                      __typename: 'Mutation',
                      createTask: data?.createTask,
                    },
                  });
                  cache.evict({ fieldName: 'data:{}' });
                },
                onError: (error) => {
                  console.log('new task creation error', error);
                },
                onCompleted: () => setReqLoadingStatus(false),
              });
            }}
          >
            <Form>
              <ModalHeader>Create New Task</ModalHeader>
              <ModalCloseButton />
              <ModalBody pb={6}>
                <FormControl>
                  <FormLabel>Name</FormLabel>
                  <Input
                    ref={initialRef}
                    placeholder="Name"
                    name="name"
                    onChange={(e) => setName(e.target.value)}
                  />
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel>Stage</FormLabel>
                  <Select
                    onChange={(e) => setStage(e.target.value as Stage)}
                    name="stage"
                    placeholder="Stage"
                  >
                    <option value={Stage.New}>New</option>
                    <option value={Stage.Pending}>Pending</option>
                    <option value={Stage.Done}>Done</option>
                  </Select>
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel>Description</FormLabel>
                  <InputField
                    name="description"
                    placeholder="Description"
                    type="text"
                  />
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel>Date</FormLabel>
                  <InputField name="date" placeholder="Date " type="date" />
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel>Assignee Notes</FormLabel>
                  <InputField
                    name="assignee_notes"
                    placeholder="Assignee Notes"
                    type="text"
                  />
                </FormControl>
              </ModalBody>

              <ModalFooter>
                <Button
                  colorScheme="blue"
                  mr={3}
                  type="submit"
                  isLoading={reqLoadingStatus}
                  onClick={onClose}
                >
                  Save
                </Button>
                <Button onClick={onClose}>Cancel</Button>
              </ModalFooter>
            </Form>
          </Formik>
        </ModalContent>
      </Modal>
    </>
  );
};
