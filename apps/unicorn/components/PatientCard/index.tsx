import { AddIcon } from '@chakra-ui/icons';
import { Badge, Flex, Text, useDisclosure } from '@chakra-ui/react';
import { Patient } from 'libs/generated/graphql';
import { FC, useRef } from 'react';
import { PatientFormModal } from '../Modals/PatientFormModal/PatientFormModal';
import { PatientModal } from '../Modals/PatientModal/PatientModal';

interface indexProps {
  patientData?: Patient;
  empty?: boolean;
}

export const PatientCard: FC<indexProps> = ({ patientData, empty = false }) => {
  // form modal stuff
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = useRef();
  const finalRef = useRef();

  // patient modal stuff
  const {
    isOpen: pIsOpen,
    onOpen: pOnOpen,
    onClose: pOnClose,
  } = useDisclosure();

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
          cursor="pointer"
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
          onClick={pOnOpen}
          cursor="pointer"
        >
          <Badge ml={4} colorScheme={'blue'}>
            Patient
          </Badge>
          <Flex justifyContent={'center'} alignItems={'center'} w={'100%'}>
            <Text cursor={'pointer'}>{patientData.name}</Text>
          </Flex>
          <PatientModal
            isOpen={pIsOpen}
            onClose={pOnClose}
            data={patientData}
          />
        </Flex>
      )}
    </>
  );
};
