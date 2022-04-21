/* eslint-disable @typescript-eslint/no-empty-interface */
import { Flex, Grid, useMediaQuery } from '@chakra-ui/react';
import MainDashboardCard from '../MainDashboardCard';

interface MainDashboardProps {}

const MainDashboard: React.FC<MainDashboardProps> = () => {
  const [isLargerThan900, isDisplayingInBrowser] = useMediaQuery([
    '(min-width: 900px)',
    '(display-mode: browser)',
  ]);

  if (MainDashboardCardData && isDisplayingInBrowser) {
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
              {MainDashboardCardData.map((cardData) => (
                <MainDashboardCard
                  cardData={cardData}
                  key={cardData.imageURL}
                />
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
              {MainDashboardCardData.map((cardData) => (
                <MainDashboardCard
                  cardData={cardData}
                  key={cardData.imageURL}
                />
              ))}
            </Grid>
          </Flex>
        )}
      </>
    );
  } else return <>No apps installed</>;
};

export default MainDashboard;
