import {
  File,
  HrAssignee,
  useServicelogsByFilenumberQuery,
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
  const { patient_id, file_number } = pFileData;
  const { data, error, loading } = useServicelogsByFilenumberQuery({
    variables: {
      filenumber: file_number,
    },
  });

  if (data && !error && !loading)
    return (
      <>
        {data.servicelogsByFilenumber.map((serviceLog) => {
          if (serviceLog.patient_id == patient_id)
            return (
              <div>
                <PatientService
                  key={serviceLog.id}
                  serviceLogData={serviceLog}
                  pFileData={pFileData}
                />
              </div>
            );
        })}
      </>
    );
  else return null;
};
