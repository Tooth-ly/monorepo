import {
  File,
  HrAssignee,
  useServicelogsByFilenumberQuery,
  useServiceQuery,
  useTasksByServiceQuery,
} from 'libs/generated/graphql';
import React from 'react';
import { PatientService } from './PatientService';

interface ServiceLogWrapperProps {
  assigneeData: HrAssignee;
  pFileData: File;
}

export const ServiceLogWrapper: React.FC<ServiceLogWrapperProps> = ({
  assigneeData,
  pFileData,
}) => {
  const { file_number } = pFileData;
  const { data, error, loading } = useServicelogsByFilenumberQuery({
    variables: {
      filenumber: file_number,
    },
  });

  if (data && !error && !loading)
    return (
      <>
        {data.servicelogsByFilenumber.map((serviceLog) => {
          return (
            <div>
              <PatientService key={serviceLog.id} serviceLogData={serviceLog} />
            </div>
          );
        })}
      </>
    );
  else return null;
};
