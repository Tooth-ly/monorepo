import { Link, useColorModeValue } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { ReactNode } from 'react';

export const NavLink = ({
  children,
  url,
}: {
  children: ReactNode;
  url: string;
}) => {
  const router = useRouter();
  return (
    <Link
      px={2}
      py={1}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('gray.200', 'gray.700'),
      }}
      onClick={() => router.push(url)}
    >
      {children}
    </Link>
  );
};
