import { NextLayoutComponentType } from 'next';
import React from 'react';
import Layout from '../layouts/Layout';

interface userProfileProps {}

const userProfile: NextLayoutComponentType<userProfileProps> = ({}) => {
  return <>user profile page</>;
};

userProfile.getLayout = (page) => <Layout layoutType="Default">{page}</Layout>;

export default userProfile;
