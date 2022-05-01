import { AddIcon } from '@chakra-ui/icons';
import {
  Badge,
  Box,
  Button,
  Flex,
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
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { Form, Formik } from 'formik';
import {
  CreatePatientDocument,
  CreatePatientMutation,
  Patient,
  Patient_Input,
  useCreatePatientMutation,
} from 'libs/generated/graphql';
import { FC, useRef, useState } from 'react';
import { InputField } from '../InputField';
import { PatientFormModal } from '../PatientFormModal/PatientFormModal';

interface indexProps {
  patientData?: Patient;
  empty?: boolean;
}

export const PatientCard: FC<indexProps> = ({ patientData, empty = false }) => {
  // form modal stuff
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = useRef();
  const finalRef = useRef();

  return (
    <>
      {empty ? (
        <Flex
          backgroundColor={'#edf2f7'}
          borderRadius={10}
          border={'solid 1px'}
          justifyContent={'center'}
          alignItems={'center'}
          onClick={onOpen}
        >
          <AddIcon margin={2} w={5} h={5} />
          <PatientFormModal
            finalRef={finalRef}
            initialRef={initialRef}
            isOpen={isOpen}
            onClose={onClose}
          />
        </Flex>
      ) : (
        <Flex
          backgroundColor={'#edf2f7'}
          borderRadius={10}
          border={'solid 1px'}
          alignItems={'center'}
          padding={2}
        >
          <Badge ml={4} colorScheme={'blue'}>
            Patient
          </Badge>
          <Flex justifyContent={'center'} alignItems={'center'} w={'100%'}>
            <Text cursor={'pointer'}>{patientData.name}</Text>
          </Flex>
        </Flex>
      )}
    </>
  );
};
