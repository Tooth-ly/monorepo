/* eslint-disable @typescript-eslint/no-empty-interface */
import { Box, Flex, useMediaQuery } from '@chakra-ui/react';
import { useRouter } from 'next/dist/client/router';
import Image from 'next/image';
import React from 'react';
import { NavContainer900 } from './styled';

interface NavBarProps {}

const NavBar: React.FC<NavBarProps> = ({}) => {
  const router = useRouter();
  const [isLargerThan900] = useMediaQuery('(min-width: 900px)');

  const signout = () => {
    console.log('yeet out');
  };

  return (
    <>
      {isLargerThan900 ? (
        <Flex
          direction={'column'}
          justifyContent={'space-between'}
          h={'100vh'}
          p={'15px 7px'}
          alignContent={'baseline'}
        >
          <Flex direction={'column'} m={'auto 0px'} w={'100%'}>
            <Box
              mb={'20px'}
              cursor={'pointer'}
              onClick={() => router.push('/')}
            >
              <Image src={'/icons8-module-90.png'} width={45} height={45} />
            </Box>
            <Box
              cursor={'pointer'}
              onClick={() => router.push('./user-profile')}
            >
              <Image src={'/icons8-user-90.png'} width={45} height={45} />
            </Box>
          </Flex>
          <Box cursor={'pointer'}>
            <Image
              src={'/icons8-sign-out-90.png'}
              onClick={() => signout()}
              width={45}
              height={45}
            />
          </Box>
        </Flex>
      ) : (
        <NavContainer900>
          <Box p={0} m={1} cursor={'pointer'} onClick={() => router.push('/')}>
            <Image src={'/icons8-module-90.png'} width={45} height={45} />
          </Box>
          <Box
            m={1}
            p={0}
            cursor={'pointer'}
            onClick={() => router.push('./user-profile')}
          >
            <Image src={'/icons8-user-90.png'} width={45} height={45} />
          </Box>
        </NavContainer900>
      )}
    </>
  );
};

export default NavBar;
