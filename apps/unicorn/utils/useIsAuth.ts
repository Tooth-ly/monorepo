import { useMeQuery } from 'libs/generated/graphql';

export const useIsAuth = () => {
  const { data, loading } = useMeQuery();
  // const router = useRouter();
  // useEffect(() => {
  //   if (!loading && !data?.me) {
  //     router.replace('/login?next=' + router.pathname);
  //   }
  // }, [loading, data, router]);
  return !loading && data ? true : false;
};
