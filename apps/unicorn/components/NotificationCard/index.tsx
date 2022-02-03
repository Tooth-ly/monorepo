import React from 'react'
import { Content, Title, Container } from './styled';

interface NotificationCardProps {
    title: string
    content: string
}

export const NotificationCard: React.FC<NotificationCardProps> = ({ title, content }) => {
    return (
        <Container>
            <Title>{title}</Title>
            <Content>{content}</Content>
        </Container>
    );
}