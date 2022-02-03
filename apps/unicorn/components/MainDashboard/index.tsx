/* eslint-disable @typescript-eslint/no-empty-interface */
import { Grid, useMediaQuery } from "@chakra-ui/react";
import { MainDashboardCardData } from "../../data";
import MainDashboardCard from "../MainDashboardCard";
import { P } from "./styled";

interface MainDashboardProps { }

const MainDashboard: React.FC<MainDashboardProps> = () => {
  const [isLargerThan900] = useMediaQuery('(min-width: 900px)')

  if (MainDashboardCardData)
    if (isLargerThan900)
      return (
        <Grid templateColumns={
          'repeat(auto-fill, minmax(300px, 1fr))'
        } rowGap={50} mt={50} >
          {
            MainDashboardCardData.map(cardData => (
              <MainDashboardCard cardData={cardData} key={cardData.imageURL} />
            ))
          }
        </Grid >
      )
    else
      return (
        <Grid templateColumns={
          'repeat(auto-fill, minmax(150px, 1fr))'
        } rowGap={50} mt={25} mb={10}>
          {
            MainDashboardCardData.map(cardData => (
              <MainDashboardCard cardData={cardData} key={cardData.imageURL} />
            ))
          }
        </Grid >
      )
  else
    return <P>No Apps Installed</P>
}

export default MainDashboard;
