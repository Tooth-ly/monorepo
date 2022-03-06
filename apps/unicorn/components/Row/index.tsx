import React from 'react';
import { Flex, Box } from '@chakra-ui/react';
import { FieldText, ValueText } from './styled';

interface TableProps {
  field: String;
  value: String;
}

export const Row: React.FC<TableProps> = ({ field, value }) => {
  return (
    <Flex alignItems={'baseline'} justifyContent={'space-between'} w={'350px'}>
      <FieldText>{field}</FieldText>
      <ValueText>{value}</ValueText>
    </Flex>
  );
};
