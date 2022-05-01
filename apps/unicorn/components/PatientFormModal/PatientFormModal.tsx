import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  FormControl,
  FormLabel,
  Input,
  Select,
  ModalFooter,
  Button,
} from '@chakra-ui/react';
import { Formik, Form } from 'formik';
import {
  CreatePatientMutation,
  CreatePatientDocument,
  Patient_Input,
  useCreatePatientMutation,
} from 'libs/generated/graphql';
import React, { MutableRefObject, useState } from 'react';
import { InputField } from '../InputField';

interface PatientModalProps {
  initialRef: MutableRefObject<any>;
  finalRef: MutableRefObject<any>;
  isOpen: boolean;
  onClose: () => void;
}

export const PatientFormModal: React.FC<PatientModalProps> = ({
  finalRef,
  isOpen,
  initialRef,
  onClose,
}) => {
  // state
  const [reqLoadingStatus, setReqLoadingStatus] = useState(false);
  const [gender, setGender] = useState(null);
  const [name, setName] = useState(null);

  const initialValues: Patient_Input = {
    dateOfBirth: Date.now,
    profile_pic_url: '',
    name: '',
    gender: gender,
  };

  const [createPatient] = useCreatePatientMutation();

  return (
    <Modal
      initialFocusRef={initialRef}
      finalFocusRef={finalRef}
      isOpen={isOpen}
      onClose={onClose}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Register Patient</ModalHeader>
        <ModalCloseButton />
        <Formik
          initialValues={initialValues}
          onSubmit={async (values) => {
            console.log('patient card modal values', {
              ...values,
              gender: gender,
              name,
            });

            setReqLoadingStatus(true);
            await createPatient({
              variables: { input: { ...values, gender, name } },
              update: (cache, { data }) => {
                cache.writeQuery<CreatePatientMutation>({
                  query: CreatePatientDocument,
                  data: {
                    __typename: 'Mutation',
                    createPatient: data?.createPatient,
                  },
                });
                cache.evict({ fieldName: 'data:{}' });
              },
              onError: (error) => {
                console.log('patient registration error', error);
              },
              onCompleted: () => setReqLoadingStatus(false),
            });
          }}
        >
          <Form>
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
                <FormLabel>Date of Birth</FormLabel>
                <InputField
                  name="dateOfBirth"
                  placeholder="Date of Birth"
                  type="date"
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Gender</FormLabel>
                <Select
                  onChange={(e) => setGender(e.target.value)}
                  name="gender"
                  placeholder="Gender"
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </Select>
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Profile Picture</FormLabel>
                <InputField
                  name="profile_pic_url"
                  placeholder="Url"
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
  );
};
