import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Flex,
  Img,
  useMediaQuery,
} from '@chakra-ui/react';
import React from 'react';
import {
  Container,
  Container900,
  GreenCircle,
  StatusContainer,
  Text,
} from './styled';
import { Row } from '../Row/index';
import Image from 'next/image';

interface PatientMenuProps {
  id: Number;
  name: string;
  status?: string;
  profileUrl: string;
}

export const PatientMenu: React.FC<PatientMenuProps> = ({
  id,
  name,
  status,
  profileUrl,
}) => {
  const [isLargerThan900px, isDisplayingInBrowser] = useMediaQuery([
    '(min-width: 900px)',
    '(display-mode: browser)',
  ]);

  if (isDisplayingInBrowser && isLargerThan900px)
    return (
      <Container900>
        <Img
          src={profileUrl}
          boxSize={100}
          objectFit={'cover'}
          borderRadius={'full'}
          m={3}
        />
        <Box>
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
          <Flex justifyContent={'space-between'} w={'70%'} m={5}>
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
        </Box>
      </Container900>
    );
  else
    return (
      <Container>
        <Img
          src={profileUrl}
          boxSize={75}
          objectFit={'cover'}
          borderRadius={'full'}
        />
        <Box>
          <Flex alignItems={'center'} justifyContent={'space-between'} m={0}>
            <Breadcrumb fontSize={17} fontWeight={500}>
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
              fontSize={'15px'}
              backgroundColor={'#ffffff'}
              border={0}
              borderRadius={'10px'}
              p={'0px 25px'}
              fontFamily={'Sans'}
            >
              Edit PFile
            </Button>
          </Flex>

          {/* table */}
          {/* <Flex justifyContent={'space-between'} w={'70%'} m={5}>
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
          </Flex> */}
        </Box>
      </Container>
    );
};
