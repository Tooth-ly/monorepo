import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Box,
  Flex,
  Text,
} from '@chakra-ui/react';
import { Patient } from 'libs/generated/graphql';
import { Image } from '@chakra-ui/react';
import React from 'react';

interface PatientModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: Patient;
}

export const PatientModal: React.FC<PatientModalProps> = ({
  isOpen,
  onClose,
  data,
}) => {
  const { name, profile_pic_url, gender, dateOfBirth } = data;
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{name}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Flex
            boxSize="sm"
            flexDir={'column'}
            justifyContent="space-evenly"
            alignItems={'center'}
          >
            <Image
              boxSize="200px"
              objectFit="cover"
              borderRadius="2xl"
              src={profile_pic_url}
              alt="Patient Profile Picture"
            />
            <Box>
              <Text>
                <Text fontWeight={'bold'}>Esem el karim:</Text> {name}
              </Text>
              <Text>
                <Text fontWeight={'bold'}>Gender:</Text> {gender}
              </Text>
              <Text>
                <Text fontWeight={'bold'}>Date of Birth:</Text> {dateOfBirth}
              </Text>
            </Box>
          </Flex>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
