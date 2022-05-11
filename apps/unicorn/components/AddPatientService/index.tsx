import { AddIcon } from '@chakra-ui/icons';
import { Flex } from '@chakra-ui/react';
import React, { MutableRefObject } from 'react';
import { ServiceModal } from '../Modals/AddServiceModal';

interface AddPatientServiceProps {
  onOpen: () => void;
  isOpen: boolean;
  initialRef: MutableRefObject<undefined>;
  finalRef: MutableRefObject<undefined>;
  onClose: () => void;
  assignee_id: number;
  patient_id: number;
  filenumber: number;
}

export const AddPatientService: React.FC<AddPatientServiceProps> = ({
  onOpen,
  finalRef,
  initialRef,
  isOpen,
  onClose,
  assignee_id,
  patient_id,
  filenumber,
}) => {
  return (
    <Flex
      backgroundColor={'#dedede'}
      borderRadius={'10px'}
      m={'10px 0px'}
      p={'10px'}
      justifyContent={'center'}
      alignItems={'center'}
      onClick={onOpen}
      cursor={'pointer'}
    >
      <AddIcon w={50} h={50} m={10} />
      <ServiceModal
        initialRef={initialRef}
        isOpen={isOpen}
        onClose={onClose}
        finalRef={finalRef}
        assignee_id={assignee_id}
        patient_id={patient_id}
        filenumber={filenumber}
      />
    </Flex>
  );
};
