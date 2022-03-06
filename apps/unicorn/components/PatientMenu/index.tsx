import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Flex,
} from '@chakra-ui/react';
import React from 'react';
import { Container, GreenCircle, StatusContainer, Text } from './styled';
import { Row } from '../Row/index';

interface PatientMenuProps {
  id: Number;
  name: string;
  status: string;
}

export const PatientMenu: React.FC<PatientMenuProps> = ({
  id,
  name,
  status,
}) => {
  return (
    <Container>
      <Flex alignItems={'baseline'} justifyContent={'space-between'} m={5}>
        <Breadcrumb fontSize={22} fontWeight={500}>
          <BreadcrumbItem>
            <BreadcrumbLink href="/pfiles" color={'inherit'}>
              Patients
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href={`/Patient/${id}`}>{name}</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>

        <Button
          fontWeight={600}
          fontSize={'18px'}
          backgroundColor={'#ffffff'}
          border={0}
          borderRadius={'10px'}
          p={'0px 15px'}
          fontFamily={'Sans'}
        >
          Edit PFile
        </Button>
      </Flex>

      {/* table */}
      <Flex justifyContent={'space-between'} w={'60%'} m={5}>
        <Flex direction={'column'} justifyContent={'space-between'}>
          <Row field={'First Name'} value={'abed biden'} />
          <Row field={'DOB'} value={'14/19/1969'} />
          <Row field={'Registered'} value={'2 Years Ago'} />
        </Flex>
        <Flex direction={'column'} justifyContent={'space-between'}>
          <Row field={'Services Done'} value={'5'} />
          <Row field={'Last Visited'} value={'5 days ago'} />
          <Row field={'Remaining Payments'} value={'29,323,927 LBP'} />
        </Flex>
      </Flex>
    </Container>
  );
};
