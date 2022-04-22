import { Box, FormErrorMessage } from '@chakra-ui/react';
import { isValidEmail } from '@tooth.ly/validation';
import { Form, Formik, FormikErrors, FormikProps } from 'formik';
import { MeDocument, MeQuery, useLoginMutation } from 'libs/generated/graphql';
import { NextLayoutComponentType } from 'next';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { InputField } from '../components/InputField';
import Layout from '../layouts/Layout';
import { toErrorMap } from '../utils/toErrorMap';
import { withApollo } from '../utils/withApollo';

interface loginProps {}

interface FormValues {
  email: string;
  password: string;
}

const login: NextLayoutComponentType<loginProps & FormikProps<FormValues>> = ({
  touched,
  errors,
}) => {
  const router = useRouter();
  const [login] = useLoginMutation();

  return (
    <Container>
      <Formik
        initialValues={{ email: '', password: '' }}
        validate={validate}
        onSubmit={async (values, { setErrors }) => {
          const response = await login({
            variables: values,
            update: (cache, { data }) => {
              cache.writeQuery<MeQuery>({
                query: MeDocument,
                data: {
                  __typename: 'Query',
                  me: data?.login.hr_assignee,
                },
              });
              cache.evict({ fieldName: 'data:{}' });
            },
            onError: (error) => {
              console.log('login error', error);
            },
          });

          if (response.data?.login.errors) {
            setErrors(toErrorMap(response.data.login.errors));
          } else if (response.data?.login.hr_assignee) {
            console.log(response.data.login.hr_assignee);
            if (typeof router.query.next === 'string') {
              router.push(router.query.next);
            } else {
              // worked
              router.push('/');
            }
          }
        }}
      >
        <FormContainer>
          <InnerForm>
            <Box mb={10}>
              <InputFieldStyle
                name="email"
                placeholder="email"
                label="Email"
                fontsize={23}
                type={'email'}
              />
              <FormErrorMessage>Email is Required</FormErrorMessage>
            </Box>
            <InputFieldStyle
              name="password"
              placeholder="password"
              label="Password"
              fontsize={23}
              type={'password'}
            />

            <ButtonsContainer>
              <ButtonStyle type="submit">login</ButtonStyle>
              <ButtonStyle
                type="button"
                onClick={() => router.push('/register')}
              >
                register
              </ButtonStyle>
              <ButtonStyle
                type="button"
                onClick={() => router.push('/forgot-password')}
              >
                forgot password
              </ButtonStyle>
            </ButtonsContainer>
          </InnerForm>
        </FormContainer>
      </Formik>
    </Container>
  );
};

const validate = (values: FormValues) => {
  let errors: FormikErrors<FormValues> = {};

  if (!values.email) {
    errors.email = 'Required';
  } else if (!isValidEmail(values.email)) {
    errors.email = 'Invalid email address';
  }

  return errors;
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

const InputFieldStyle = styled(InputField)`
  font-size: 25px;
`;

login.getLayout = (page) => <Layout layoutType="Default">{page}</Layout>;

export default withApollo({ ssr: false })(login);
