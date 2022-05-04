import { AddIcon } from '@chakra-ui/icons';
import { useDisclosure } from '@chakra-ui/react';
import { File } from 'libs/generated/graphql';
import { FC, useRef } from 'react';
import { PFilesCardFormModal } from '../Modals/PFilesCardFormModal/PFilesCardFormModal';
import { PFilesCardView } from '../PFilesCardView/PFilesCardView';
import { Container } from './styled';

interface PFilesCardProps {
  fileData?: File;
  createMode?: boolean;
}

export const PFilesCard: FC<PFilesCardProps> = ({
  createMode = false,
  fileData,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = useRef();
  const finalRef = useRef();

  return (
    <>
      {createMode ? (
        <Container onClick={onOpen}>
          <AddIcon margin={2} w={5} h={5} />
          <PFilesCardFormModal
            initialRef={initialRef}
            isOpen={isOpen}
            onClose={onClose}
            finalRef={finalRef}
          />
        </Container>
      ) : (
        <>{fileData && <PFilesCardView fileData={fileData} />}</>
      )}
    </>
  );
};
