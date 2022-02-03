import React from 'react'
import { Container } from './styled';
import { AddIcon } from '@chakra-ui/icons'

interface TaskProps {
    title?: string
    content?: string
    plusSign?: boolean
}

export const Task: React.FC<TaskProps> = ({ title, plusSign = false }) => {
    if (plusSign)
        return (
            <Container>
                <AddIcon />
            </Container>
        )
    else
        return (
            <Container>
                {title}
            </Container>
        );
}