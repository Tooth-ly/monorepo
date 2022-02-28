/* eslint-disable @typescript-eslint/no-empty-interface */
import { NextLayoutComponentType } from 'next';
import React from 'react';
import styled from 'styled-components';
import MainDashboard from '../components/MainDashboard';
import Layout from '../layouts/Layout';

interface indexProps {}

const index: NextLayoutComponentType<indexProps> = () => {
  return (
    <Container>
      <MainDashboard />
    </Container>
  );
};

index.getLayout = (page) => <Layout layoutType="Default">{page}</Layout>;

const Container = styled.div`
  font-family: 'Sans';
  /* height: 55vh; */
  height: 100%;
  width: 100%;
`;
export default index;
