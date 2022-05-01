import { AddIcon } from '@chakra-ui/icons';
import {
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
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { Patient } from 'libs/generated/graphql';
import { useRef, FC } from 'react';

interface indexProps {
  patientData?: Patient;
  empty?: boolean;
}

export const PatientCard: FC<indexProps> = ({ patientData, empty = false }) => {
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
        >
          <AddIcon onClick={onOpen} margin={2} w={5} h={5} />
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
              <ModalBody pb={6}>
                <FormControl>
                  <FormLabel>First name</FormLabel>
                  <Input ref={initialRef} placeholder="First name" />
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel>Last name</FormLabel>
                  <Input placeholder="Last name" />
                </FormControl>
              </ModalBody>

              <ModalFooter>
                <Button colorScheme="blue" mr={3}>
                  Save
                </Button>
                <Button onClick={onClose}>Cancel</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </Flex>
      ) : (
        <Box>
          <Text>{patientData.name}</Text>
        </Box>
      )}
    </>
  );
};
