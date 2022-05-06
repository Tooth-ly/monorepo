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
import { Form, Formik, FormikHelpers, FormikProps } from 'formik';
import { useServiceQuery } from 'libs/generated/graphql';
import { FC } from 'react';
import { InputField } from '../../InputField';

interface ServiceModalProps {
  initialRef: any;
  finalRef: any;
  onOpen?: any;
  onClose: any;
  isOpen: any;
}

interface FormValues {
  title: string;
  objective: string;
  schedule: () => number;
}

export const ServiceModal: FC<ServiceModalProps> = ({
  initialRef,
  finalRef,
  onClose,
  isOpen,
}) => {
  const initialValues: FormValues = {
    title: '',
    objective: '',
    schedule: Date.now,
  };

  return (
    <Modal
      initialFocusRef={initialRef}
      finalFocusRef={finalRef}
      isOpen={isOpen}
      onClose={onClose}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add Service</ModalHeader>
        <ModalCloseButton />
        <Formik
          initialValues={initialValues}
          onSubmit={async (values) => {
            console.log('service modal values', values);
          }}
        >
          <Form>
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Select service</FormLabel>
                <Select placeholder="Select service">
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </Select>
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Schedule</FormLabel>
                <InputField
                  name="schedule"
                  placeholder="Schedule"
                  type="date"
                />
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button type="submit" colorScheme="blue" mr={3}>
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
