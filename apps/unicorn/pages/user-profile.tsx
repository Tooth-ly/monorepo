import { Box } from '@chakra-ui/react';
import { useMeQuery } from 'libs/generated/graphql';
import { NextLayoutComponentType } from 'next';
import React from 'react';
import Layout from '../layouts/Layout';

interface userProfileProps {}

const userProfile: NextLayoutComponentType<userProfileProps> = ({}) => {
  const { data, loading } = useMeQuery();

  console.log('user data', data);
  return (
    <>
      user profile
      {data && !loading && <Box>{data}</Box>}
    </>
  );
};

userProfile.getLayout = (page) => <Layout layoutType="Default">{page}</Layout>;

export default userProfile;
