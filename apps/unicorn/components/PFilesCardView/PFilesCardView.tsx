import { Flex, Badge, Text } from '@chakra-ui/react';
import { File, usePatientQuery } from 'libs/generated/graphql';
import React, { useEffect } from 'react';
import { PatientModal } from '../Modals/PatientModal/PatientModal';
import { Container, Name } from './styled';

interface PFilesCardViewProps {
  fileData: File;
}

export const PFilesCardView: React.FC<PFilesCardViewProps> = ({ fileData }) => {
  const { data: patientData, error } = usePatientQuery({
    variables: {
      patientId: fileData.patient_id,
    },
  });

  useEffect(() => {
    console.log('nani', patientData.patient.patient.name);
  }, [patientData]);

  if (patientData && !error)
    return (
      <Flex
        backgroundColor={'#edf2f7'}
        borderRadius={10}
        border={'solid 1px'}
        alignItems={'center'}
        padding={2}
        cursor="pointer"
      >
        <Badge ml={4} colorScheme={'blue'}>
          File
        </Badge>
        <Flex justifyContent={'center'} alignItems={'center'} w={'100%'}>
          <Text>{patientData.patient.patient.name}</Text>
        </Flex>
      </Flex>
    );
  else return <></>;
};
