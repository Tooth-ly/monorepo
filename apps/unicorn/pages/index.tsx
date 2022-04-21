/* eslint-disable @typescript-eslint/no-empty-interface */
import { NextLayoutComponentType } from 'next';
import React from 'react';
import styled from 'styled-components';
import MainDashboard from '../components/MainDashboard';
import NavBar from '../components/NavBar';
import Layout from '../layouts/Layout';
import { useIsAuth } from '../utils/useIsAuth';

interface indexProps {}

const index: NextLayoutComponentType<indexProps> = () => {
  useIsAuth();

  return (
    <Container>
      <NavBar />
      <MainDashboard />
    </Container>
  );
};

index.getLayout = (page) => <Layout layoutType="Default">{page}</Layout>;

const Container = styled.div`
  font-family: 'Sans';
  height: 100%;
  width: 100%;
`;
export default index;
