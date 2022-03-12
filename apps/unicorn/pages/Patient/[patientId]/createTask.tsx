import Layout from 'apps/unicorn/layouts/Layout';
import { NextLayoutComponentType } from 'next';
import { useRouter } from 'next/router';
import React from 'react';

interface createTaskProps {}

const createTask: NextLayoutComponentType<createTaskProps> = ({}) => {
  const router = useRouter();
  const id = router.query.patientId as unknown as number;
  return (
    <>
      <p>create task page</p>
    </>
  );
};

createTask.getLayout = (page) => <Layout layoutType="NoBgColor">{page}</Layout>;

export default createTask;
