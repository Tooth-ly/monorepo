import { AddIcon } from '@chakra-ui/icons';
import { useDisclosure } from '@chakra-ui/react';
import { FC, useRef } from 'react';
import { PFilesCardFormModal } from '../Modals/PFilesCardFormModal/PFilesCardFormModal';
import { Container, Name } from './styled';

interface PFilesCardProps {
  filesdata: any;
  createMode?: boolean;
}

export const PFilesCard: FC<PFilesCardProps> = ({
  filesdata,
  createMode = false,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = useRef();
  const finalRef = useRef();

  return (
    <Container onClick={onOpen}>
      {createMode ? (
        <>
          <AddIcon margin={2} w={5} h={5} />
          <PFilesCardFormModal
            initialRef={initialRef}
            isOpen={isOpen}
            onClose={onClose}
            finalRef={finalRef}
          />
        </>
      ) : (
        <Name>{filesdata.name}</Name>
      )}
    </Container>
  );
};
