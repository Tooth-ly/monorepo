/* eslint-disable @typescript-eslint/no-empty-interface */
import { Grid, useMediaQuery, Flex, Box } from '@chakra-ui/react';
import { MainDashboardCardData } from '../../data';
import MainDashboardCard from '../MainDashboardCard';
import { P } from './styled';
import NavBar from '../NavBar/index';

interface MainDashboardProps {}

const MainDashboard: React.FC<MainDashboardProps> = () => {
  const [isLargerThan900] = useMediaQuery('(min-width: 900px)');

  if (MainDashboardCardData)
    if (isLargerThan900)
      return (
        <Flex w="100%">
          <NavBar />
          <Grid
            templateColumns={'repeat(auto-fill, minmax(200px, 1fr))'}
            rowGap={50}
            mt={50}
            w={'100%'}
          >
            {MainDashboardCardData.map((cardData) => (
              <MainDashboardCard cardData={cardData} key={cardData.imageURL} />
            ))}
          </Grid>
        </Flex>
      );
    else
      return (
        <Flex flexDirection={'column'}>
          <Grid
            templateColumns={'repeat(auto-fill, minmax(150px, 1fr))'}
            rowGap={50}
            mt={25}
            mb={10}
          >
            {MainDashboardCardData.map((cardData) => (
              <MainDashboardCard cardData={cardData} key={cardData.imageURL} />
            ))}
          </Grid>
          <NavBar />
        </Flex>
      );
  else return <P>No Apps Installed</P>;
};

export default MainDashboard;
