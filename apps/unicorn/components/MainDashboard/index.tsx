/* eslint-disable @typescript-eslint/no-empty-interface */
import { Flex, Grid, useMediaQuery } from '@chakra-ui/react';
import { Module } from '../../types';
import MainDashboardCard from '../MainDashboardCard';

interface MainDashboardProps {
  modules: Module[];
}

const MainDashboard: React.FC<MainDashboardProps> = ({ modules }) => {
  const [isLargerThan900, isDisplayingInBrowser] = useMediaQuery([
    '(min-width: 900px)',
    '(display-mode: browser)',
  ]);

  if (isDisplayingInBrowser) {
    return (
      <>
        {isLargerThan900 ? (
          <Flex w="100%" flexDir={'column'}>
            <Grid
              templateColumns={'repeat(auto-fill, minmax(200px, 1fr))'}
              rowGap={50}
              mt={50}
              w={'100%'}
            >
              {modules.map((module) => (
                <MainDashboardCard module={module} key={module.appName} />
              ))}
            </Grid>
          </Flex>
        ) : (
          <Flex flexDirection={'column'}>
            <Grid
              templateColumns={'repeat(auto-fill, minmax(150px, 1fr))'}
              rowGap={50}
              mt={25}
              mb={10}
            >
              {modules.map((module) => (
                <MainDashboardCard module={module} key={module.appName} />
              ))}
            </Grid>
          </Flex>
        )}
      </>
    );
  } else return <>No apps installed</>;
};

export default MainDashboard;
