import { Box } from '@chakra-ui/react';
import { NextLayoutComponentType } from 'next';
import React from 'react';
import Navbar from '../../components/NavBar/index';

interface TaskProps {}

export const TaskProps: NextLayoutComponentType<TaskProps> = ({}) => {
  return (
    <Box>
      <Navbar />
    </Box>
  );
};
