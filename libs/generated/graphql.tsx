import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type FieldError = {
  __typename?: 'FieldError';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type File = {
  __typename?: 'File';
  assignee_id?: Maybe<Scalars['Float']>;
  createdAt: Scalars['String'];
  file_number: Scalars['Float'];
  patient_id?: Maybe<Scalars['Float']>;
  photo_url?: Maybe<Scalars['String']>;
  updatedAt: Scalars['String'];
};

export type File_Input = {
  assignee_id?: InputMaybe<Scalars['Float']>;
  createdAt: Scalars['String'];
  file_number: Scalars['Float'];
  patient_id: Scalars['Float'];
  photo_url?: InputMaybe<Scalars['String']>;
  updatedAt: Scalars['String'];
};

export enum Gender {
  Female = 'female',
  Male = 'male',
  Other = 'other'
}

export enum Hr_Type {
  Admin = 'Admin',
  Doctor = 'Doctor',
  Employee = 'Employee',
  Student = 'Student'
}

export type Hr_Assignee = {
  __typename?: 'Hr_Assignee';
  createdAt: Scalars['String'];
  email: Scalars['String'];
  hr_type: Hr_Type;
  id: Scalars['Int'];
  mail: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
  profile_pic_url: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type Hr_Assignee_Input = {
  createdAt: Scalars['String'];
  hr_type: Hr_Type;
  id: Scalars['Int'];
  mail: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
  profile_pic_url: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type Hr_Assignee_Response = {
  __typename?: 'Hr_Assignee_Response';
  errors?: Maybe<Array<FieldError>>;
  hr_assignee?: Maybe<Hr_Assignee>;
};

export type Hr_Assignee_Update_Input = {
  hr_type: Hr_Type;
  mail: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
  profile_pic_url: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  changePassword: Hr_Assignee_Response;
  createFile: File;
  createHrAssignee: Hr_Assignee;
  createPatient: Patient;
  createTask: Task;
  deleteFile: Scalars['Boolean'];
  deleteHrAssignee: Scalars['Boolean'];
  deletePatient: Scalars['Boolean'];
  deleteTask: Scalars['Boolean'];
  login: Hr_Assignee_Response;
  logout: Scalars['Boolean'];
  updateFile: Scalars['Boolean'];
  updateHrAssignee: Scalars['Boolean'];
  updatePatient: Scalars['Boolean'];
  updateTask: Scalars['Boolean'];
};


export type MutationChangePasswordArgs = {
  newPassword: Scalars['String'];
  token: Scalars['String'];
};


export type MutationCreateFileArgs = {
  input: File_Input;
};


export type MutationCreateHrAssigneeArgs = {
  input: Hr_Assignee_Input;
};


export type MutationCreatePatientArgs = {
  input: Patient_Input;
};


export type MutationCreateTaskArgs = {
  input: Task_Input;
};


export type MutationDeleteFileArgs = {
  file_number: Scalars['Int'];
};


export type MutationDeleteHrAssigneeArgs = {
  id: Scalars['Int'];
};


export type MutationDeletePatientArgs = {
  id: Scalars['Int'];
};


export type MutationDeleteTaskArgs = {
  id: Scalars['Int'];
};


export type MutationLoginArgs = {
  Email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationUpdateFileArgs = {
  file_number: Scalars['Int'];
  input: File_Input;
};


export type MutationUpdateHrAssigneeArgs = {
  id: Scalars['Int'];
  input: Hr_Assignee_Update_Input;
};


export type MutationUpdatePatientArgs = {
  id: Scalars['Int'];
  input: Patient_Input;
};


export type MutationUpdateTaskArgs = {
  id: Scalars['Int'];
  input: Task_Input;
};

export type Patient = {
  __typename?: 'Patient';
  age: Scalars['Float'];
  cat_id: Scalars['Float'];
  createdAt: Scalars['String'];
  file_number: Scalars['Float'];
  gender: Gender;
  id: Scalars['Float'];
  name: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type Patient_Input = {
  age: Scalars['Float'];
  cat_id: Scalars['Float'];
  file_number: Scalars['Float'];
  gender: Gender;
  id: Scalars['Float'];
  name: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  file: File;
  files: Array<File>;
  hrAssignee: Hr_Assignee;
  hrAssignees: Array<Hr_Assignee>;
  patient: Patient;
  patients: Array<Patient>;
  task: Task;
  tasks: Array<Task>;
  tasksByService: Array<Task>;
};


export type QueryFileArgs = {
  file_number: Scalars['Float'];
};


export type QueryHrAssigneeArgs = {
  id: Scalars['String'];
};


export type QueryPatientArgs = {
  id: Scalars['String'];
};


export type QueryTaskArgs = {
  id: Scalars['String'];
};


export type QueryTasksByServiceArgs = {
  sid: Scalars['Int'];
};

export enum Stage {
  Done = 'Done',
  New = 'New',
  Pending = 'Pending'
}

export type Task = {
  __typename?: 'Task';
  assignee_notes?: Maybe<Scalars['String']>;
  createdAt: Scalars['String'];
  date: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['Float'];
  name: Scalars['String'];
  service_log_id: Scalars['Float'];
  stage: Stage;
  updatedAt: Scalars['String'];
};

export type Task_Input = {
  assignee_notes?: InputMaybe<Scalars['String']>;
  date: Scalars['String'];
  description?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  service_log_id: Scalars['Float'];
  stage: Stage;
};

export type ChangePasswordMutationVariables = Exact<{
  newPassword: Scalars['String'];
  token: Scalars['String'];
}>;


export type ChangePasswordMutation = { __typename?: 'Mutation', changePassword: { __typename?: 'Hr_Assignee_Response', errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null, hr_assignee?: { __typename?: 'Hr_Assignee', id: number, name: string, password: string, profile_pic_url: string, hr_type: Hr_Type, mail: string, createdAt: string, updatedAt: string, email: string } | null } };

export type CreateFileMutationVariables = Exact<{
  input: File_Input;
}>;


export type CreateFileMutation = { __typename?: 'Mutation', createFile: { __typename?: 'File', file_number: number, patient_id?: number | null, photo_url?: string | null, assignee_id?: number | null, createdAt: string, updatedAt: string } };

export type CreateHrAssigneeMutationVariables = Exact<{
  input: Hr_Assignee_Input;
}>;


export type CreateHrAssigneeMutation = { __typename?: 'Mutation', createHrAssignee: { __typename?: 'Hr_Assignee', id: number, name: string, password: string, profile_pic_url: string, hr_type: Hr_Type, createdAt: string, mail: string, updatedAt: string, email: string } };

export type CreatePatientMutationVariables = Exact<{
  input: Patient_Input;
}>;


export type CreatePatientMutation = { __typename?: 'Mutation', createPatient: { __typename?: 'Patient', id: number, file_number: number, name: string, gender: Gender, age: number, cat_id: number, createdAt: string, updatedAt: string } };

export type CreateTaskMutationVariables = Exact<{
  input: Task_Input;
}>;


export type CreateTaskMutation = { __typename?: 'Mutation', createTask: { __typename?: 'Task', id: number, service_log_id: number, stage: Stage, name: string, description?: string | null, assignee_notes?: string | null, date: string, createdAt: string, updatedAt: string } };

export type DeleteFileMutationVariables = Exact<{
  fileNumber: Scalars['Int'];
}>;


export type DeleteFileMutation = { __typename?: 'Mutation', deleteFile: boolean };

export type DeleteHrAssigneeMutationVariables = Exact<{
  deleteHrAssigneeId: Scalars['Int'];
}>;


export type DeleteHrAssigneeMutation = { __typename?: 'Mutation', deleteHrAssignee: boolean };

export type DeletePatientMutationVariables = Exact<{
  deletePatientId: Scalars['Int'];
}>;


export type DeletePatientMutation = { __typename?: 'Mutation', deletePatient: boolean };

export type DeleteTaskMutationVariables = Exact<{
  deleteTaskId: Scalars['Int'];
}>;


export type DeleteTaskMutation = { __typename?: 'Mutation', deleteTask: boolean };

export type LoginMutationVariables = Exact<{
  password: Scalars['String'];
  email: Scalars['String'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'Hr_Assignee_Response', errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null, hr_assignee?: { __typename?: 'Hr_Assignee', id: number, password: string, name: string, profile_pic_url: string, hr_type: Hr_Type, mail: string, createdAt: string, email: string, updatedAt: string } | null } };

export type MutationMutationVariables = Exact<{ [key: string]: never; }>;


export type MutationMutation = { __typename?: 'Mutation', logout: boolean };

export type UpdateFileMutationVariables = Exact<{
  input: File_Input;
  fileNumber: Scalars['Int'];
}>;


export type UpdateFileMutation = { __typename?: 'Mutation', updateFile: boolean };

export type UpdateHrAssigneeMutationVariables = Exact<{
  input: Hr_Assignee_Update_Input;
  updateHrAssigneeId: Scalars['Int'];
}>;


export type UpdateHrAssigneeMutation = { __typename?: 'Mutation', updateHrAssignee: boolean };

export type UpdatePatientMutationVariables = Exact<{
  input: Patient_Input;
  updatePatientId: Scalars['Int'];
}>;


export type UpdatePatientMutation = { __typename?: 'Mutation', updatePatient: boolean };

export type UpdateTaskMutationVariables = Exact<{
  input: Task_Input;
  updateTaskId: Scalars['Int'];
}>;


export type UpdateTaskMutation = { __typename?: 'Mutation', updateTask: boolean };

export type FileQueryVariables = Exact<{
  fileNumber: Scalars['Float'];
}>;


export type FileQuery = { __typename?: 'Query', file: { __typename?: 'File', file_number: number, patient_id?: number | null, assignee_id?: number | null, photo_url?: string | null, createdAt: string, updatedAt: string } };

export type FilesQueryVariables = Exact<{ [key: string]: never; }>;


export type FilesQuery = { __typename?: 'Query', files: Array<{ __typename?: 'File', file_number: number, patient_id?: number | null, photo_url?: string | null, assignee_id?: number | null, updatedAt: string, createdAt: string }> };

export type HrAssigneeQueryVariables = Exact<{
  hrAssigneeId: Scalars['String'];
}>;


export type HrAssigneeQuery = { __typename?: 'Query', hrAssignee: { __typename?: 'Hr_Assignee', id: number, name: string, password: string, email: string, profile_pic_url: string, hr_type: Hr_Type, mail: string, createdAt: string, updatedAt: string } };

export type HrAssigneesQueryVariables = Exact<{ [key: string]: never; }>;


export type HrAssigneesQuery = { __typename?: 'Query', hrAssignees: Array<{ __typename?: 'Hr_Assignee', email: string, updatedAt: string, createdAt: string, mail: string, hr_type: Hr_Type, profile_pic_url: string, password: string, name: string, id: number }> };

export type PatientQueryVariables = Exact<{
  patientId: Scalars['String'];
}>;


export type PatientQuery = { __typename?: 'Query', patient: { __typename?: 'Patient', id: number, file_number: number, name: string, gender: Gender, age: number, createdAt: string, cat_id: number, updatedAt: string } };

export type PatientsQueryVariables = Exact<{ [key: string]: never; }>;


export type PatientsQuery = { __typename?: 'Query', patients: Array<{ __typename?: 'Patient', id: number, file_number: number, name: string, gender: Gender, age: number, cat_id: number, createdAt: string, updatedAt: string }> };

export type TaskQueryVariables = Exact<{
  taskId: Scalars['String'];
}>;


export type TaskQuery = { __typename?: 'Query', task: { __typename?: 'Task', id: number, service_log_id: number, stage: Stage, description?: string | null, name: string, assignee_notes?: string | null, date: string, createdAt: string, updatedAt: string } };

export type TasksByServiceQueryVariables = Exact<{
  sid: Scalars['Int'];
}>;


export type TasksByServiceQuery = { __typename?: 'Query', tasksByService: Array<{ __typename?: 'Task', id: number, service_log_id: number, stage: Stage, name: string, description?: string | null, assignee_notes?: string | null, date: string, createdAt: string, updatedAt: string }> };

export type TasksQueryVariables = Exact<{ [key: string]: never; }>;


export type TasksQuery = { __typename?: 'Query', tasks: Array<{ __typename?: 'Task', id: number, service_log_id: number, stage: Stage, name: string, description?: string | null, assignee_notes?: string | null, date: string, createdAt: string, updatedAt: string }> };


export const ChangePasswordDocument = gql`
    mutation ChangePassword($newPassword: String!, $token: String!) {
  changePassword(newPassword: $newPassword, token: $token) {
    errors {
      field
      message
    }
    hr_assignee {
      id
      name
      password
      profile_pic_url
      hr_type
      mail
      createdAt
      updatedAt
      email
    }
  }
}
    `;
export type ChangePasswordMutationFn = Apollo.MutationFunction<ChangePasswordMutation, ChangePasswordMutationVariables>;

/**
 * __useChangePasswordMutation__
 *
 * To run a mutation, you first call `useChangePasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangePasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changePasswordMutation, { data, loading, error }] = useChangePasswordMutation({
 *   variables: {
 *      newPassword: // value for 'newPassword'
 *      token: // value for 'token'
 *   },
 * });
 */
export function useChangePasswordMutation(baseOptions?: Apollo.MutationHookOptions<ChangePasswordMutation, ChangePasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ChangePasswordMutation, ChangePasswordMutationVariables>(ChangePasswordDocument, options);
      }
export type ChangePasswordMutationHookResult = ReturnType<typeof useChangePasswordMutation>;
export type ChangePasswordMutationResult = Apollo.MutationResult<ChangePasswordMutation>;
export type ChangePasswordMutationOptions = Apollo.BaseMutationOptions<ChangePasswordMutation, ChangePasswordMutationVariables>;
export const CreateFileDocument = gql`
    mutation CreateFile($input: File_Input!) {
  createFile(input: $input) {
    file_number
    patient_id
    photo_url
    assignee_id
    createdAt
    updatedAt
  }
}
    `;
export type CreateFileMutationFn = Apollo.MutationFunction<CreateFileMutation, CreateFileMutationVariables>;

/**
 * __useCreateFileMutation__
 *
 * To run a mutation, you first call `useCreateFileMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateFileMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createFileMutation, { data, loading, error }] = useCreateFileMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateFileMutation(baseOptions?: Apollo.MutationHookOptions<CreateFileMutation, CreateFileMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateFileMutation, CreateFileMutationVariables>(CreateFileDocument, options);
      }
export type CreateFileMutationHookResult = ReturnType<typeof useCreateFileMutation>;
export type CreateFileMutationResult = Apollo.MutationResult<CreateFileMutation>;
export type CreateFileMutationOptions = Apollo.BaseMutationOptions<CreateFileMutation, CreateFileMutationVariables>;
export const CreateHrAssigneeDocument = gql`
    mutation CreateHrAssignee($input: Hr_Assignee_Input!) {
  createHrAssignee(input: $input) {
    id
    name
    password
    profile_pic_url
    hr_type
    createdAt
    mail
    updatedAt
    email
  }
}
    `;
export type CreateHrAssigneeMutationFn = Apollo.MutationFunction<CreateHrAssigneeMutation, CreateHrAssigneeMutationVariables>;

/**
 * __useCreateHrAssigneeMutation__
 *
 * To run a mutation, you first call `useCreateHrAssigneeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateHrAssigneeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createHrAssigneeMutation, { data, loading, error }] = useCreateHrAssigneeMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateHrAssigneeMutation(baseOptions?: Apollo.MutationHookOptions<CreateHrAssigneeMutation, CreateHrAssigneeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateHrAssigneeMutation, CreateHrAssigneeMutationVariables>(CreateHrAssigneeDocument, options);
      }
export type CreateHrAssigneeMutationHookResult = ReturnType<typeof useCreateHrAssigneeMutation>;
export type CreateHrAssigneeMutationResult = Apollo.MutationResult<CreateHrAssigneeMutation>;
export type CreateHrAssigneeMutationOptions = Apollo.BaseMutationOptions<CreateHrAssigneeMutation, CreateHrAssigneeMutationVariables>;
export const CreatePatientDocument = gql`
    mutation CreatePatient($input: Patient_Input!) {
  createPatient(input: $input) {
    id
    file_number
    name
    gender
    age
    cat_id
    createdAt
    updatedAt
  }
}
    `;
export type CreatePatientMutationFn = Apollo.MutationFunction<CreatePatientMutation, CreatePatientMutationVariables>;

/**
 * __useCreatePatientMutation__
 *
 * To run a mutation, you first call `useCreatePatientMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePatientMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPatientMutation, { data, loading, error }] = useCreatePatientMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreatePatientMutation(baseOptions?: Apollo.MutationHookOptions<CreatePatientMutation, CreatePatientMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreatePatientMutation, CreatePatientMutationVariables>(CreatePatientDocument, options);
      }
export type CreatePatientMutationHookResult = ReturnType<typeof useCreatePatientMutation>;
export type CreatePatientMutationResult = Apollo.MutationResult<CreatePatientMutation>;
export type CreatePatientMutationOptions = Apollo.BaseMutationOptions<CreatePatientMutation, CreatePatientMutationVariables>;
export const CreateTaskDocument = gql`
    mutation CreateTask($input: Task_Input!) {
  createTask(input: $input) {
    id
    service_log_id
    stage
    name
    description
    assignee_notes
    date
    createdAt
    updatedAt
  }
}
    `;
export type CreateTaskMutationFn = Apollo.MutationFunction<CreateTaskMutation, CreateTaskMutationVariables>;

/**
 * __useCreateTaskMutation__
 *
 * To run a mutation, you first call `useCreateTaskMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTaskMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTaskMutation, { data, loading, error }] = useCreateTaskMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateTaskMutation(baseOptions?: Apollo.MutationHookOptions<CreateTaskMutation, CreateTaskMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateTaskMutation, CreateTaskMutationVariables>(CreateTaskDocument, options);
      }
export type CreateTaskMutationHookResult = ReturnType<typeof useCreateTaskMutation>;
export type CreateTaskMutationResult = Apollo.MutationResult<CreateTaskMutation>;
export type CreateTaskMutationOptions = Apollo.BaseMutationOptions<CreateTaskMutation, CreateTaskMutationVariables>;
export const DeleteFileDocument = gql`
    mutation DeleteFile($fileNumber: Int!) {
  deleteFile(file_number: $fileNumber)
}
    `;
export type DeleteFileMutationFn = Apollo.MutationFunction<DeleteFileMutation, DeleteFileMutationVariables>;

/**
 * __useDeleteFileMutation__
 *
 * To run a mutation, you first call `useDeleteFileMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteFileMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteFileMutation, { data, loading, error }] = useDeleteFileMutation({
 *   variables: {
 *      fileNumber: // value for 'fileNumber'
 *   },
 * });
 */
export function useDeleteFileMutation(baseOptions?: Apollo.MutationHookOptions<DeleteFileMutation, DeleteFileMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteFileMutation, DeleteFileMutationVariables>(DeleteFileDocument, options);
      }
export type DeleteFileMutationHookResult = ReturnType<typeof useDeleteFileMutation>;
export type DeleteFileMutationResult = Apollo.MutationResult<DeleteFileMutation>;
export type DeleteFileMutationOptions = Apollo.BaseMutationOptions<DeleteFileMutation, DeleteFileMutationVariables>;
export const DeleteHrAssigneeDocument = gql`
    mutation DeleteHrAssignee($deleteHrAssigneeId: Int!) {
  deleteHrAssignee(id: $deleteHrAssigneeId)
}
    `;
export type DeleteHrAssigneeMutationFn = Apollo.MutationFunction<DeleteHrAssigneeMutation, DeleteHrAssigneeMutationVariables>;

/**
 * __useDeleteHrAssigneeMutation__
 *
 * To run a mutation, you first call `useDeleteHrAssigneeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteHrAssigneeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteHrAssigneeMutation, { data, loading, error }] = useDeleteHrAssigneeMutation({
 *   variables: {
 *      deleteHrAssigneeId: // value for 'deleteHrAssigneeId'
 *   },
 * });
 */
export function useDeleteHrAssigneeMutation(baseOptions?: Apollo.MutationHookOptions<DeleteHrAssigneeMutation, DeleteHrAssigneeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteHrAssigneeMutation, DeleteHrAssigneeMutationVariables>(DeleteHrAssigneeDocument, options);
      }
export type DeleteHrAssigneeMutationHookResult = ReturnType<typeof useDeleteHrAssigneeMutation>;
export type DeleteHrAssigneeMutationResult = Apollo.MutationResult<DeleteHrAssigneeMutation>;
export type DeleteHrAssigneeMutationOptions = Apollo.BaseMutationOptions<DeleteHrAssigneeMutation, DeleteHrAssigneeMutationVariables>;
export const DeletePatientDocument = gql`
    mutation DeletePatient($deletePatientId: Int!) {
  deletePatient(id: $deletePatientId)
}
    `;
export type DeletePatientMutationFn = Apollo.MutationFunction<DeletePatientMutation, DeletePatientMutationVariables>;

/**
 * __useDeletePatientMutation__
 *
 * To run a mutation, you first call `useDeletePatientMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeletePatientMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deletePatientMutation, { data, loading, error }] = useDeletePatientMutation({
 *   variables: {
 *      deletePatientId: // value for 'deletePatientId'
 *   },
 * });
 */
export function useDeletePatientMutation(baseOptions?: Apollo.MutationHookOptions<DeletePatientMutation, DeletePatientMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeletePatientMutation, DeletePatientMutationVariables>(DeletePatientDocument, options);
      }
export type DeletePatientMutationHookResult = ReturnType<typeof useDeletePatientMutation>;
export type DeletePatientMutationResult = Apollo.MutationResult<DeletePatientMutation>;
export type DeletePatientMutationOptions = Apollo.BaseMutationOptions<DeletePatientMutation, DeletePatientMutationVariables>;
export const DeleteTaskDocument = gql`
    mutation DeleteTask($deleteTaskId: Int!) {
  deleteTask(id: $deleteTaskId)
}
    `;
export type DeleteTaskMutationFn = Apollo.MutationFunction<DeleteTaskMutation, DeleteTaskMutationVariables>;

/**
 * __useDeleteTaskMutation__
 *
 * To run a mutation, you first call `useDeleteTaskMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteTaskMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteTaskMutation, { data, loading, error }] = useDeleteTaskMutation({
 *   variables: {
 *      deleteTaskId: // value for 'deleteTaskId'
 *   },
 * });
 */
export function useDeleteTaskMutation(baseOptions?: Apollo.MutationHookOptions<DeleteTaskMutation, DeleteTaskMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteTaskMutation, DeleteTaskMutationVariables>(DeleteTaskDocument, options);
      }
export type DeleteTaskMutationHookResult = ReturnType<typeof useDeleteTaskMutation>;
export type DeleteTaskMutationResult = Apollo.MutationResult<DeleteTaskMutation>;
export type DeleteTaskMutationOptions = Apollo.BaseMutationOptions<DeleteTaskMutation, DeleteTaskMutationVariables>;
export const LoginDocument = gql`
    mutation Login($password: String!, $email: String!) {
  login(password: $password, Email: $email) {
    errors {
      field
      message
    }
    hr_assignee {
      id
      password
      name
      profile_pic_url
      hr_type
      mail
      createdAt
      email
      updatedAt
    }
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      password: // value for 'password'
 *      email: // value for 'email'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const MutationDocument = gql`
    mutation Mutation {
  logout
}
    `;
export type MutationMutationFn = Apollo.MutationFunction<MutationMutation, MutationMutationVariables>;

/**
 * __useMutationMutation__
 *
 * To run a mutation, you first call `useMutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [mutationMutation, { data, loading, error }] = useMutationMutation({
 *   variables: {
 *   },
 * });
 */
export function useMutationMutation(baseOptions?: Apollo.MutationHookOptions<MutationMutation, MutationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<MutationMutation, MutationMutationVariables>(MutationDocument, options);
      }
export type MutationMutationHookResult = ReturnType<typeof useMutationMutation>;
export type MutationMutationResult = Apollo.MutationResult<MutationMutation>;
export type MutationMutationOptions = Apollo.BaseMutationOptions<MutationMutation, MutationMutationVariables>;
export const UpdateFileDocument = gql`
    mutation UpdateFile($input: File_Input!, $fileNumber: Int!) {
  updateFile(input: $input, file_number: $fileNumber)
}
    `;
export type UpdateFileMutationFn = Apollo.MutationFunction<UpdateFileMutation, UpdateFileMutationVariables>;

/**
 * __useUpdateFileMutation__
 *
 * To run a mutation, you first call `useUpdateFileMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateFileMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateFileMutation, { data, loading, error }] = useUpdateFileMutation({
 *   variables: {
 *      input: // value for 'input'
 *      fileNumber: // value for 'fileNumber'
 *   },
 * });
 */
export function useUpdateFileMutation(baseOptions?: Apollo.MutationHookOptions<UpdateFileMutation, UpdateFileMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateFileMutation, UpdateFileMutationVariables>(UpdateFileDocument, options);
      }
export type UpdateFileMutationHookResult = ReturnType<typeof useUpdateFileMutation>;
export type UpdateFileMutationResult = Apollo.MutationResult<UpdateFileMutation>;
export type UpdateFileMutationOptions = Apollo.BaseMutationOptions<UpdateFileMutation, UpdateFileMutationVariables>;
export const UpdateHrAssigneeDocument = gql`
    mutation UpdateHrAssignee($input: Hr_Assignee_Update_Input!, $updateHrAssigneeId: Int!) {
  updateHrAssignee(input: $input, id: $updateHrAssigneeId)
}
    `;
export type UpdateHrAssigneeMutationFn = Apollo.MutationFunction<UpdateHrAssigneeMutation, UpdateHrAssigneeMutationVariables>;

/**
 * __useUpdateHrAssigneeMutation__
 *
 * To run a mutation, you first call `useUpdateHrAssigneeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateHrAssigneeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateHrAssigneeMutation, { data, loading, error }] = useUpdateHrAssigneeMutation({
 *   variables: {
 *      input: // value for 'input'
 *      updateHrAssigneeId: // value for 'updateHrAssigneeId'
 *   },
 * });
 */
export function useUpdateHrAssigneeMutation(baseOptions?: Apollo.MutationHookOptions<UpdateHrAssigneeMutation, UpdateHrAssigneeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateHrAssigneeMutation, UpdateHrAssigneeMutationVariables>(UpdateHrAssigneeDocument, options);
      }
export type UpdateHrAssigneeMutationHookResult = ReturnType<typeof useUpdateHrAssigneeMutation>;
export type UpdateHrAssigneeMutationResult = Apollo.MutationResult<UpdateHrAssigneeMutation>;
export type UpdateHrAssigneeMutationOptions = Apollo.BaseMutationOptions<UpdateHrAssigneeMutation, UpdateHrAssigneeMutationVariables>;
export const UpdatePatientDocument = gql`
    mutation UpdatePatient($input: Patient_Input!, $updatePatientId: Int!) {
  updatePatient(input: $input, id: $updatePatientId)
}
    `;
export type UpdatePatientMutationFn = Apollo.MutationFunction<UpdatePatientMutation, UpdatePatientMutationVariables>;

/**
 * __useUpdatePatientMutation__
 *
 * To run a mutation, you first call `useUpdatePatientMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePatientMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePatientMutation, { data, loading, error }] = useUpdatePatientMutation({
 *   variables: {
 *      input: // value for 'input'
 *      updatePatientId: // value for 'updatePatientId'
 *   },
 * });
 */
export function useUpdatePatientMutation(baseOptions?: Apollo.MutationHookOptions<UpdatePatientMutation, UpdatePatientMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdatePatientMutation, UpdatePatientMutationVariables>(UpdatePatientDocument, options);
      }
export type UpdatePatientMutationHookResult = ReturnType<typeof useUpdatePatientMutation>;
export type UpdatePatientMutationResult = Apollo.MutationResult<UpdatePatientMutation>;
export type UpdatePatientMutationOptions = Apollo.BaseMutationOptions<UpdatePatientMutation, UpdatePatientMutationVariables>;
export const UpdateTaskDocument = gql`
    mutation UpdateTask($input: Task_Input!, $updateTaskId: Int!) {
  updateTask(input: $input, id: $updateTaskId)
}
    `;
export type UpdateTaskMutationFn = Apollo.MutationFunction<UpdateTaskMutation, UpdateTaskMutationVariables>;

/**
 * __useUpdateTaskMutation__
 *
 * To run a mutation, you first call `useUpdateTaskMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTaskMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTaskMutation, { data, loading, error }] = useUpdateTaskMutation({
 *   variables: {
 *      input: // value for 'input'
 *      updateTaskId: // value for 'updateTaskId'
 *   },
 * });
 */
export function useUpdateTaskMutation(baseOptions?: Apollo.MutationHookOptions<UpdateTaskMutation, UpdateTaskMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateTaskMutation, UpdateTaskMutationVariables>(UpdateTaskDocument, options);
      }
export type UpdateTaskMutationHookResult = ReturnType<typeof useUpdateTaskMutation>;
export type UpdateTaskMutationResult = Apollo.MutationResult<UpdateTaskMutation>;
export type UpdateTaskMutationOptions = Apollo.BaseMutationOptions<UpdateTaskMutation, UpdateTaskMutationVariables>;
export const FileDocument = gql`
    query File($fileNumber: Float!) {
  file(file_number: $fileNumber) {
    file_number
    patient_id
    assignee_id
    photo_url
    createdAt
    updatedAt
  }
}
    `;

/**
 * __useFileQuery__
 *
 * To run a query within a React component, call `useFileQuery` and pass it any options that fit your needs.
 * When your component renders, `useFileQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFileQuery({
 *   variables: {
 *      fileNumber: // value for 'fileNumber'
 *   },
 * });
 */
export function useFileQuery(baseOptions: Apollo.QueryHookOptions<FileQuery, FileQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FileQuery, FileQueryVariables>(FileDocument, options);
      }
export function useFileLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FileQuery, FileQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FileQuery, FileQueryVariables>(FileDocument, options);
        }
export type FileQueryHookResult = ReturnType<typeof useFileQuery>;
export type FileLazyQueryHookResult = ReturnType<typeof useFileLazyQuery>;
export type FileQueryResult = Apollo.QueryResult<FileQuery, FileQueryVariables>;
export const FilesDocument = gql`
    query Files {
  files {
    file_number
    patient_id
    photo_url
    assignee_id
    updatedAt
    createdAt
  }
}
    `;

/**
 * __useFilesQuery__
 *
 * To run a query within a React component, call `useFilesQuery` and pass it any options that fit your needs.
 * When your component renders, `useFilesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFilesQuery({
 *   variables: {
 *   },
 * });
 */
export function useFilesQuery(baseOptions?: Apollo.QueryHookOptions<FilesQuery, FilesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FilesQuery, FilesQueryVariables>(FilesDocument, options);
      }
export function useFilesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FilesQuery, FilesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FilesQuery, FilesQueryVariables>(FilesDocument, options);
        }
export type FilesQueryHookResult = ReturnType<typeof useFilesQuery>;
export type FilesLazyQueryHookResult = ReturnType<typeof useFilesLazyQuery>;
export type FilesQueryResult = Apollo.QueryResult<FilesQuery, FilesQueryVariables>;
export const HrAssigneeDocument = gql`
    query HrAssignee($hrAssigneeId: String!) {
  hrAssignee(id: $hrAssigneeId) {
    id
    name
    password
    email
    profile_pic_url
    hr_type
    mail
    createdAt
    updatedAt
  }
}
    `;

/**
 * __useHrAssigneeQuery__
 *
 * To run a query within a React component, call `useHrAssigneeQuery` and pass it any options that fit your needs.
 * When your component renders, `useHrAssigneeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHrAssigneeQuery({
 *   variables: {
 *      hrAssigneeId: // value for 'hrAssigneeId'
 *   },
 * });
 */
export function useHrAssigneeQuery(baseOptions: Apollo.QueryHookOptions<HrAssigneeQuery, HrAssigneeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<HrAssigneeQuery, HrAssigneeQueryVariables>(HrAssigneeDocument, options);
      }
export function useHrAssigneeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<HrAssigneeQuery, HrAssigneeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<HrAssigneeQuery, HrAssigneeQueryVariables>(HrAssigneeDocument, options);
        }
export type HrAssigneeQueryHookResult = ReturnType<typeof useHrAssigneeQuery>;
export type HrAssigneeLazyQueryHookResult = ReturnType<typeof useHrAssigneeLazyQuery>;
export type HrAssigneeQueryResult = Apollo.QueryResult<HrAssigneeQuery, HrAssigneeQueryVariables>;
export const HrAssigneesDocument = gql`
    query HrAssignees {
  hrAssignees {
    email
    updatedAt
    createdAt
    mail
    hr_type
    profile_pic_url
    password
    name
    id
  }
}
    `;

/**
 * __useHrAssigneesQuery__
 *
 * To run a query within a React component, call `useHrAssigneesQuery` and pass it any options that fit your needs.
 * When your component renders, `useHrAssigneesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHrAssigneesQuery({
 *   variables: {
 *   },
 * });
 */
export function useHrAssigneesQuery(baseOptions?: Apollo.QueryHookOptions<HrAssigneesQuery, HrAssigneesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<HrAssigneesQuery, HrAssigneesQueryVariables>(HrAssigneesDocument, options);
      }
export function useHrAssigneesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<HrAssigneesQuery, HrAssigneesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<HrAssigneesQuery, HrAssigneesQueryVariables>(HrAssigneesDocument, options);
        }
export type HrAssigneesQueryHookResult = ReturnType<typeof useHrAssigneesQuery>;
export type HrAssigneesLazyQueryHookResult = ReturnType<typeof useHrAssigneesLazyQuery>;
export type HrAssigneesQueryResult = Apollo.QueryResult<HrAssigneesQuery, HrAssigneesQueryVariables>;
export const PatientDocument = gql`
    query Patient($patientId: String!) {
  patient(id: $patientId) {
    id
    file_number
    name
    gender
    age
    createdAt
    cat_id
    updatedAt
  }
}
    `;

/**
 * __usePatientQuery__
 *
 * To run a query within a React component, call `usePatientQuery` and pass it any options that fit your needs.
 * When your component renders, `usePatientQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePatientQuery({
 *   variables: {
 *      patientId: // value for 'patientId'
 *   },
 * });
 */
export function usePatientQuery(baseOptions: Apollo.QueryHookOptions<PatientQuery, PatientQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PatientQuery, PatientQueryVariables>(PatientDocument, options);
      }
export function usePatientLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PatientQuery, PatientQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PatientQuery, PatientQueryVariables>(PatientDocument, options);
        }
export type PatientQueryHookResult = ReturnType<typeof usePatientQuery>;
export type PatientLazyQueryHookResult = ReturnType<typeof usePatientLazyQuery>;
export type PatientQueryResult = Apollo.QueryResult<PatientQuery, PatientQueryVariables>;
export const PatientsDocument = gql`
    query Patients {
  patients {
    id
    file_number
    name
    gender
    age
    cat_id
    createdAt
    updatedAt
  }
}
    `;

/**
 * __usePatientsQuery__
 *
 * To run a query within a React component, call `usePatientsQuery` and pass it any options that fit your needs.
 * When your component renders, `usePatientsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePatientsQuery({
 *   variables: {
 *   },
 * });
 */
export function usePatientsQuery(baseOptions?: Apollo.QueryHookOptions<PatientsQuery, PatientsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PatientsQuery, PatientsQueryVariables>(PatientsDocument, options);
      }
export function usePatientsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PatientsQuery, PatientsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PatientsQuery, PatientsQueryVariables>(PatientsDocument, options);
        }
export type PatientsQueryHookResult = ReturnType<typeof usePatientsQuery>;
export type PatientsLazyQueryHookResult = ReturnType<typeof usePatientsLazyQuery>;
export type PatientsQueryResult = Apollo.QueryResult<PatientsQuery, PatientsQueryVariables>;
export const TaskDocument = gql`
    query Task($taskId: String!) {
  task(id: $taskId) {
    id
    service_log_id
    stage
    description
    name
    assignee_notes
    date
    createdAt
    updatedAt
  }
}
    `;

/**
 * __useTaskQuery__
 *
 * To run a query within a React component, call `useTaskQuery` and pass it any options that fit your needs.
 * When your component renders, `useTaskQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTaskQuery({
 *   variables: {
 *      taskId: // value for 'taskId'
 *   },
 * });
 */
export function useTaskQuery(baseOptions: Apollo.QueryHookOptions<TaskQuery, TaskQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TaskQuery, TaskQueryVariables>(TaskDocument, options);
      }
export function useTaskLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TaskQuery, TaskQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TaskQuery, TaskQueryVariables>(TaskDocument, options);
        }
export type TaskQueryHookResult = ReturnType<typeof useTaskQuery>;
export type TaskLazyQueryHookResult = ReturnType<typeof useTaskLazyQuery>;
export type TaskQueryResult = Apollo.QueryResult<TaskQuery, TaskQueryVariables>;
export const TasksByServiceDocument = gql`
    query TasksByService($sid: Int!) {
  tasksByService(sid: $sid) {
    id
    service_log_id
    stage
    name
    description
    assignee_notes
    date
    createdAt
    updatedAt
  }
}
    `;

/**
 * __useTasksByServiceQuery__
 *
 * To run a query within a React component, call `useTasksByServiceQuery` and pass it any options that fit your needs.
 * When your component renders, `useTasksByServiceQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTasksByServiceQuery({
 *   variables: {
 *      sid: // value for 'sid'
 *   },
 * });
 */
export function useTasksByServiceQuery(baseOptions: Apollo.QueryHookOptions<TasksByServiceQuery, TasksByServiceQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TasksByServiceQuery, TasksByServiceQueryVariables>(TasksByServiceDocument, options);
      }
export function useTasksByServiceLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TasksByServiceQuery, TasksByServiceQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TasksByServiceQuery, TasksByServiceQueryVariables>(TasksByServiceDocument, options);
        }
export type TasksByServiceQueryHookResult = ReturnType<typeof useTasksByServiceQuery>;
export type TasksByServiceLazyQueryHookResult = ReturnType<typeof useTasksByServiceLazyQuery>;
export type TasksByServiceQueryResult = Apollo.QueryResult<TasksByServiceQuery, TasksByServiceQueryVariables>;
export const TasksDocument = gql`
    query Tasks {
  tasks {
    id
    service_log_id
    stage
    name
    description
    assignee_notes
    date
    createdAt
    updatedAt
  }
}
    `;

/**
 * __useTasksQuery__
 *
 * To run a query within a React component, call `useTasksQuery` and pass it any options that fit your needs.
 * When your component renders, `useTasksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTasksQuery({
 *   variables: {
 *   },
 * });
 */
export function useTasksQuery(baseOptions?: Apollo.QueryHookOptions<TasksQuery, TasksQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TasksQuery, TasksQueryVariables>(TasksDocument, options);
      }
export function useTasksLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TasksQuery, TasksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TasksQuery, TasksQueryVariables>(TasksDocument, options);
        }
export type TasksQueryHookResult = ReturnType<typeof useTasksQuery>;
export type TasksLazyQueryHookResult = ReturnType<typeof useTasksLazyQuery>;
export type TasksQueryResult = Apollo.QueryResult<TasksQuery, TasksQueryVariables>;