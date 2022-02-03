import { Box, Button, Flex, FormControl, FormLabel, Grid, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from '@chakra-ui/react';
import React from 'react'
import { Service } from '../../data';
import { Task } from '../Task';
import { Container, InnerServiceDone, InnerServiceInProgress, InnerServiceNew } from './styled'
import { AddIcon } from '@chakra-ui/icons'

interface PatientServiceProps {
    serviceData?: Service
    patientId?: number
}

export const PatientService: React.FC<PatientServiceProps> = ({ serviceData, patientId }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const initialRef = React.useRef<any>()
    const finalRef = React.useRef<any>()

    if (serviceData && patientId)
        return (
            <Container>
                <Text fontWeight={600}>Service</Text>
                <Grid
                    templateColumns={'repeat(auto-fit, minmax(100px, 1fr))'}
                    gap={2}
                    textAlign={'center'}
                    mt={'10px'}
                >
                    <InnerServiceNew>
                        New
                        {
                            (serviceData.tasks.length > 0 && serviceData.patientId == patientId && serviceData.serviceType == 'New') ? (
                                <>
                                    {
                                        serviceData.tasks.map(task => (
                                            <Box m={'7px'} key={task.title}>
                                                <Task title={task.title} content={task.content} />
                                            </Box>
                                        ))
                                    }
                                    <Box m={'7px'} onClick={onOpen}>
                                        <Task plusSign={true} />
                                    </Box>
                                    <Modal
                                        initialFocusRef={initialRef}
                                        finalFocusRef={finalRef}
                                        isOpen={isOpen}
                                        onClose={onClose}
                                    >
                                        <ModalOverlay />
                                        <ModalContent>
                                            <ModalHeader>Create a Task</ModalHeader>
                                            <ModalCloseButton />
                                            <ModalBody pb={6}>
                                                <FormControl>
                                                    <FormLabel>Title</FormLabel>
                                                    <Input ref={initialRef} placeholder='Title' />
                                                </FormControl>

                                                <FormControl mt={4}>
                                                    <FormLabel>Content</FormLabel>
                                                    <Input placeholder='Content' />
                                                </FormControl>
                                            </ModalBody>

                                            <ModalFooter>
                                                <Button colorScheme='blue' mr={3}>
                                                    Save
                                                </Button>
                                                <Button onClick={onClose}>Cancel</Button>
                                            </ModalFooter>
                                        </ModalContent>
                                    </Modal>
                                </>
                            )
                                :
                                (
                                    <Box m={'7px'} onClick={onOpen}>
                                        <Task plusSign={true} />
                                    </Box>
                                )
                        }
                    </InnerServiceNew>
                    <InnerServiceInProgress>
                        In Progress
                        {
                            (serviceData.tasks.length > 0 && serviceData.patientId == patientId && serviceData.serviceType == 'In Progress') ? (
                                <>
                                    {
                                        serviceData.tasks.map(task => (
                                            <>
                                                <Box m={'7px'} key={task.title}>
                                                    <Task title={task.title} content={task.content} />
                                                </Box>
                                            </>
                                        ))
                                    }
                                    <Box m={'7px'} onClick={onOpen}>
                                        <Task plusSign={true} />
                                    </Box>
                                    <Modal
                                        initialFocusRef={initialRef}
                                        finalFocusRef={finalRef}
                                        isOpen={isOpen}
                                        onClose={onClose}
                                    >
                                        <ModalOverlay />
                                        <ModalContent>
                                            <ModalHeader>Create a Task</ModalHeader>
                                            <ModalCloseButton />
                                            <ModalBody pb={6}>
                                                <FormControl>
                                                    <FormLabel>Title</FormLabel>
                                                    <Input ref={initialRef} placeholder='Title' />
                                                </FormControl>

                                                <FormControl mt={4}>
                                                    <FormLabel>Content</FormLabel>
                                                    <Input placeholder='Content' />
                                                </FormControl>
                                            </ModalBody>

                                            <ModalFooter>
                                                <Button colorScheme='blue' mr={3}>
                                                    Save
                                                </Button>
                                                <Button onClick={onClose}>Cancel</Button>
                                            </ModalFooter>
                                        </ModalContent>
                                    </Modal>
                                </>
                            )
                                :
                                (
                                    <Box m={'7px'} onClick={onOpen}>
                                        <Task plusSign={true} />
                                    </Box>
                                )
                        }
                    </InnerServiceInProgress>
                    <InnerServiceDone>
                        Done
                        {
                            (serviceData.tasks.length > 0 && serviceData.patientId == patientId && serviceData.serviceType == 'Done') ? (
                                <>
                                    {
                                        serviceData.tasks.map(task => (
                                            <>
                                                <Box m={'7px'} key={task.title}>
                                                    <Task title={task.title} content={task.content} />
                                                </Box>
                                            </>
                                        ))
                                    }
                                    <Box m={'7px'} onClick={onOpen}>
                                        <Task plusSign={true} />
                                    </Box>
                                    <Modal
                                        initialFocusRef={initialRef}
                                        finalFocusRef={finalRef}
                                        isOpen={isOpen}
                                        onClose={onClose}
                                    >
                                        <ModalOverlay />
                                        <ModalContent>
                                            <ModalHeader>Create a Task</ModalHeader>
                                            <ModalCloseButton />
                                            <ModalBody pb={6}>
                                                <FormControl>
                                                    <FormLabel>Title</FormLabel>
                                                    <Input ref={initialRef} placeholder='Title' />
                                                </FormControl>

                                                <FormControl mt={4}>
                                                    <FormLabel>Content</FormLabel>
                                                    <Input placeholder='Content' />
                                                </FormControl>
                                            </ModalBody>

                                            <ModalFooter>
                                                <Button colorScheme='blue' mr={3}>
                                                    Save
                                                </Button>
                                                <Button onClick={onClose}>Cancel</Button>
                                            </ModalFooter>
                                        </ModalContent>
                                    </Modal>
                                </>
                            )
                                :
                                (
                                    <>
                                        <Box m={'7px'} onClick={onOpen}>
                                            <Task plusSign={true} />
                                        </Box>
                                        <Modal
                                            initialFocusRef={initialRef}
                                            finalFocusRef={finalRef}
                                            isOpen={isOpen}
                                            onClose={onClose}
                                        >
                                            <ModalOverlay />
                                            <ModalContent>
                                                <ModalHeader>Create a Task</ModalHeader>
                                                <ModalCloseButton />
                                                <ModalBody pb={6}>
                                                    <FormControl>
                                                        <FormLabel>Title</FormLabel>
                                                        <Input ref={initialRef} placeholder='Title' />
                                                    </FormControl>

                                                    <FormControl mt={4}>
                                                        <FormLabel>Content</FormLabel>
                                                        <Input placeholder='Content' />
                                                    </FormControl>
                                                </ModalBody>

                                                <ModalFooter>
                                                    <Button colorScheme='blue' mr={3}>
                                                        Save
                                                    </Button>
                                                    <Button onClick={onClose}>Cancel</Button>
                                                </ModalFooter>
                                            </ModalContent>
                                        </Modal>
                                    </>
                                )
                        }
                    </InnerServiceDone>
                </Grid>
            </Container >
        )
    else
        return (
            <Flex
                backgroundColor={'#dedede'}
                borderRadius={'10px'}
                m={'10px 0px'}
                p={'10px'}
                justifyContent={'center'}
                alignItems={'center'}
                onClick={onOpen}
            >
                <AddIcon w={50} h={50} m={10} />
                <Modal
                    initialFocusRef={initialRef}
                    finalFocusRef={finalRef}
                    isOpen={isOpen}
                    onClose={onClose}
                >
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>Create a Service</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody pb={6}>
                            <FormControl>
                                <FormLabel>Title</FormLabel>
                                <Input ref={initialRef} placeholder='Title' />
                            </FormControl>
                        </ModalBody>

                        <ModalFooter>
                            <Button colorScheme='blue' mr={3}>
                                Save
                            </Button>
                            <Button onClick={onClose}>Cancel</Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </Flex>
        )
}