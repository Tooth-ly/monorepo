import Layout from 'apps/unicorn/layouts/Layout';
import { NextLayoutComponentType } from 'next';
import { useRouter } from 'next/router';
import React from 'react';

interface createServiceProps {}

const createService: NextLayoutComponentType<createServiceProps> = ({}) => {
  const router = useRouter();
  const id = router.query.patientId as unknown as number;

  console.log('id', id);

  return (
    <>
      <p>create service page</p>
    </>
  );
};

createService.getLayout = (page) => (
  <Layout layoutType="NoBgColor">{page}</Layout>
);

export default createService;
