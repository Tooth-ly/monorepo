import { useRouter } from 'next/router';

export const useGetIntId = () => {
  const router = useRouter();
  const intId =
    typeof router.query.patientId === 'string'
      ? parseInt(router.query.patientId)
      : -1;

  return intId;
};
