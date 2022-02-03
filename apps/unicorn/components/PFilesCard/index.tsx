import React from 'react';
import { PFiles } from '../../../data';
import { Container, Name } from './styled';

interface PFilesCardProps {
    data: PFiles
}

export const PFilesCard: React.FC<PFilesCardProps> = ({ data }) => {
    return (
        <Container>
            <Name>{data.name}</Name>
        </Container >
    );
}

