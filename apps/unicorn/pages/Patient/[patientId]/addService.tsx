import Layout from 'apps/unicorn/layouts/Layout';
import { NextLayoutComponentType } from 'next';
import { useRouter } from 'next/router';
import React from 'react';

interface addServiceProps {}

const addService: NextLayoutComponentType<addServiceProps> = ({}) => {
  const router = useRouter();
  const id = router.query.patientId as unknown as number;

  console.log('id', id);

  return (
    <>
      <p>create service page</p>
    </>
  );
};

addService.getLayout = (page) => <Layout layoutType="NoBgColor">{page}</Layout>;

export default addService;
