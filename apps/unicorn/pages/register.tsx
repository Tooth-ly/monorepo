import { Box } from '@chakra-ui/react';
import { Form, Formik } from 'formik';
import {
  MeDocument,
  MeQuery,
  useCreateHrAssigneeMutation,
} from 'libs/generated/graphql';
import { NextLayoutComponentType } from 'next';
import { useRouter } from 'next/dist/client/router';
import React from 'react';
import styled from 'styled-components';
import { InputField } from '../components/InputField';
import Layout from '../layouts/Layout';
import { toErrorMap } from '../utils/toErrorMap';
import { withApollo } from '../utils/withApollo';

interface registerProps {}

interface FormValues {
  email: string;
  name: string;
  password: string;
}

const register: NextLayoutComponentType<registerProps> = ({}) => {
  const router = useRouter();
  const initialValues: FormValues = { email: '', name: '', password: '' };
  const [register] = useCreateHrAssigneeMutation();

  return (
    <Container>
      <Formik
        initialValues={initialValues}
        onSubmit={async (value, { setErrors }) => {
          console.log('values', value);
          const response = await register({
            variables: {
              input: value,
            },
            update: (cache, { data }) => {
              cache.writeQuery<MeQuery>({
                query: MeDocument,
                data: {
                  __typename: 'Query',
                  me: data?.createHrAssignee.hr_assignee,
                },
              });
            },
            onError: (error) => {
              console.log(error);
            },
          });

          console.log('res register', response);
          if (response.data?.createHrAssignee.errors) {
            setErrors(toErrorMap(response.data.createHrAssignee.errors));
          } else if (response.data?.createHrAssignee.hr_assignee) {
            // worked
            router.push('/');
          }
        }}
      >
        <FormContainer>
          <InnerForm>
            <InputField
              name="email"
              placeholder="email"
              label="Email"
              fontsize={23}
              type={'email'}
            />
            <Box mt={2} mb={2}>
              <InputField
                name="password"
                placeholder="password"
                label="Password"
                fontsize={23}
                type={'password'}
              />
            </Box>
            <InputField
              name="name"
              placeholder="name"
              label="Name"
              fontsize={23}
              type={'name'}
            />

            <ButtonsContainer>
              <ButtonStyle type="submit">register</ButtonStyle>
              <ButtonStyle type="button" onClick={() => router.push('/login')}>
                login instead
              </ButtonStyle>
            </ButtonsContainer>
          </InnerForm>
        </FormContainer>
      </Formik>
    </Container>
  );
};

const Container = styled.div({
  width: '100%',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
});

const FormContainer = styled(Form)`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ButtonStyle = styled.button`
  font-size: 17px;
  padding: 5px;
  background-color: #00f7ff;
`;

const ButtonsContainer = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
`;

const InnerForm = styled.div`
  margin: auto auto;
`;

register.getLayout = (page) => <Layout layoutType="Default">{page}</Layout>;

export default withApollo({ ssr: false })(register);
// export default register;
