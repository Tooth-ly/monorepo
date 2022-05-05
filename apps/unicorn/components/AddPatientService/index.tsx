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
}

export const AddPatientService: React.FC<AddPatientServiceProps> = ({
  onOpen,
  finalRef,
  initialRef,
  isOpen,
  onClose,
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
