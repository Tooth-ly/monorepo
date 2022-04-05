/* eslint-disable @typescript-eslint/no-empty-interface */
import { useMeQuery } from 'libs/generated/graphql';
import { NextLayoutComponentType } from 'next';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import MainDashboard from '../components/MainDashboard';
import Layout from '../layouts/Layout';

interface indexProps {}

const index: NextLayoutComponentType<indexProps> = () => {
  const { data } = useMeQuery();
  const router = useRouter();

  useEffect(() => {
    if (!data) {
      router.push('/login');
    }
  });

  return (
    <Container>
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
