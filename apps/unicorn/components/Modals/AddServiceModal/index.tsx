import {
  Button,
  FormControl,
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
  AddServiceDocument,
  AddServiceMutation,
  ServiceLog_Input,
  useAddServiceMutation,
  useServicesQuery,
} from 'libs/generated/graphql';
import { useRouter } from 'next/router';
import { FC, MutableRefObject, useState } from 'react';
import { InputField } from '../../InputField';

interface ServiceModalProps {
  initialRef: MutableRefObject<undefined>;
  finalRef: MutableRefObject<undefined>;
  onClose: () => void;
  isOpen: boolean;
  patient_id: number;
  assignee_id: number;
  filenumber: number;
}

export const ServiceModal: FC<ServiceModalProps> = ({
  initialRef,
  finalRef,
  onClose,
  isOpen,
  assignee_id,
  patient_id,
  filenumber,
}) => {
  // queries and mutations
  const { data, error, loading } = useServicesQuery();
  const [addService] = useAddServiceMutation();

  // state
  const [serviceId, setServiceId] = useState<number>(null);
  const [ReqLoadingStatus, setReqLoadingStatus] = useState(false);

  const initialValues: ServiceLog_Input = {
    assignee_id: assignee_id,
    patient_id: patient_id,
    service_id: null,
    date: Date.now().toString(),
    filenumber: filenumber,
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
            let augValues: ServiceLog_Input = {
              ...values,
              service_id: serviceId,
              assignee_id,
              patient_id,
              filenumber,
            };
            console.log('service modal values', augValues);

            setReqLoadingStatus(true);
            await addService({
              variables: {
                input: augValues,
              },
              update: (cache, { data }) => {
                cache.writeQuery<AddServiceMutation>({
                  query: AddServiceDocument,
                  data: {
                    __typename: 'Mutation',
                    addService: data?.addService,
                  },
                });
                cache.evict({ fieldName: 'data:{}' });
              },
              onError: (error) => {
                console.log('adding service error', error);
              },
              onCompleted: () => {
                setReqLoadingStatus(false);
                onClose();
              },
            });
          }}
        >
          <Form>
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Select service</FormLabel>
                <Select
                  placeholder="Select service"
                  onChange={(e) =>
                    setServiceId(parseInt(e.target.value as string))
                  }
                >
                  {!loading && !error && data && (
                    <>
                      {data.services.map((service) => (
                        <option value={service.id}>{service.name}</option>
                      ))}
                    </>
                  )}
                </Select>
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Schedule</FormLabel>
                <InputField name="date" placeholder="Schedule" type="date" />
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button
                type="submit"
                colorScheme="blue"
                mr={3}
                isLoading={ReqLoadingStatus}
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
