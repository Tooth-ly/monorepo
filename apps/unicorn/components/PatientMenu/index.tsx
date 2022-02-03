import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button, Flex } from '@chakra-ui/react';
import React from 'react';
import { Container, GreenCircle, StatusContainer, Text } from './styled';

interface PatientMenuProps {
    id: Number
    name: string
    status: string
}

export const PatientMenu: React.FC<PatientMenuProps> = ({ id, name, status }) => {
    return (
        <Container>
            <Breadcrumb fontSize={22} fontWeight={500} m={'20px'}>
                <BreadcrumbItem>
                    <BreadcrumbLink href='/pfiles' color={'inherit'}>Patients</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem isCurrentPage>
                    <BreadcrumbLink href={`/Patient/${id}`}>{name}</BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>

            <Flex justifyContent={'space-between'} m={'0px 20px'}>
                {
                    status == 'alive' ? (
                        <StatusContainer>
                            <GreenCircle />
                            <Text>On Track</Text>
                        </StatusContainer>
                    ) :
                        (
                            <StatusContainer>
                                <GreenCircle />
                                <Text>Not Alive</Text>
                            </StatusContainer>
                        )
                }
                <Button
                    fontWeight={600}
                    fontSize={'18px'}
                    backgroundColor={'#ffffff'}
                    border={0}
                    borderRadius={'10px'}
                    p={'0px 15px'}
                    fontFamily={'Segoe UI'}
                >Create</Button>
            </Flex>
        </Container >
    )
}