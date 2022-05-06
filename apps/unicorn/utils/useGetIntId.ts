import { useRouter } from 'next/router';

export const useGetIntId = () => {
  const router = useRouter();
  const intId =
    typeof router.query.fileNumber === 'string'
      ? parseInt(router.query.fileNumber)
      : -1;

  return intId;
};
