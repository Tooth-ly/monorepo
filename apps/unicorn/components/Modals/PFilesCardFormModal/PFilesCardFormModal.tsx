import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
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
  File_Input,
  useCreateFileMutation,
  useHrAssigneesQuery,
  useMeQuery,
  usePatientsQuery,
} from 'libs/generated/graphql';
import React, { MutableRefObject, useState } from 'react';
import { InputField } from '../../InputField';

interface PFilesCardFormModalProps {
  initialRef: MutableRefObject<undefined>;
  finalRef: MutableRefObject<undefined>;
  isOpen: boolean;
  onClose: () => void;
}

export const PFilesCardFormModal: React.FC<PFilesCardFormModalProps> = ({
  initialRef,
  finalRef,
  isOpen,
  onClose,
}) => {
  // data
  const { data: assignersData } = useHrAssigneesQuery();
  const { data: patientsData } = usePatientsQuery();
  const { data: me, loading: meLoading, error: meError } = useMeQuery();
  const [createFile] = useCreateFileMutation();

  // state
  const [patient_id, setPatientId] = useState(null);
  const [assignee_id, setAssignerId] = useState(
    meLoading && meError && me.me.id
  );
  const [reqLoading, setReqLoadingStatus] = useState(false);
  const [PatientErrorMessage, setPatientErrorMessage] = useState(null);
  const [AssigneeErrorMessage, setAssigneeErrorMessage] = useState(null);

  return (
    <Modal
      initialFocusRef={initialRef}
      finalFocusRef={finalRef}
      isOpen={isOpen}
      onClose={onClose}
    >
      <ModalOverlay />
      <ModalContent>
        <Formik
          initialValues={{
            patient_id: patient_id,
            assignee_id: assignee_id,
            status: '',
          }}
          onSubmit={async (values: File_Input, { setErrors }) => {
            console.log('file form values', {
              ...values,
              assignee_id,
              patient_id: parseInt(patient_id),
            });

            setReqLoadingStatus(true);
            const response = await createFile({
              variables: {
                input: {
                  ...values,
                  assignee_id,
                  patient_id,
                },
              },
              onError: (error) => {
                console.log('file form error', error);
                setPatientErrorMessage(error.message);
              },
              onCompleted: () => {
                setReqLoadingStatus(false);
                onClose();
              },
            });

            if (response.data.createFile.errors) {
              const { field, message } = response.data.createFile.errors[0];
              if (field == 'patient_id') setPatientErrorMessage(message);
              else if (field == 'assignee_id') setAssigneeErrorMessage(message);
            }
          }}
        >
          <Form>
            <ModalHeader>Open File</ModalHeader>
            <ModalCloseButton />

            {/* form */}

            <ModalBody pb={6}>
              <FormControl mb={4} isInvalid={PatientErrorMessage}>
                <FormLabel>Patient</FormLabel>
                <Select
                  ref={initialRef}
                  onChange={(e) => setPatientId(parseInt(e.target.value))}
                  name="patientId"
                  placeholder="Patient"
                >
                  {patientsData &&
                    patientsData.patients.map((patient) => (
                      <option key={patient.id} value={patient.id}>
                        {patient.name}
                      </option>
                    ))}
                </Select>
                {PatientErrorMessage && (
                  <FormErrorMessage>{PatientErrorMessage}</FormErrorMessage>
                )}
              </FormControl>

              <FormControl mb={4} isInvalid={AssigneeErrorMessage}>
                <FormLabel>Who to assign this to?</FormLabel>
                <Select
                  onChange={(e) => setAssignerId(parseInt(e.target.value))}
                  name="assigneeId"
                  placeholder="Assignee"
                >
                  {assignersData &&
                    assignersData.hrAssignees.map((assignee) => (
                      <option key={assignee.id} value={assignee.id}>
                        {assignee.name}
                      </option>
                    ))}
                </Select>
                {AssigneeErrorMessage && (
                  <FormErrorMessage>{AssigneeErrorMessage}</FormErrorMessage>
                )}
              </FormControl>

              <FormControl>
                <FormLabel>Status</FormLabel>
                <InputField name="status" placeholder="Status" type="text" />
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button
                colorScheme="blue"
                mr={3}
                type={'submit'}
                isLoading={reqLoading}
              >
                Save
              </Button>
              <Button onClick={onClose} type={'button'}>
                Cancel
              </Button>
            </ModalFooter>
          </Form>
        </Formik>
      </ModalContent>
    </Modal>
  );
};
