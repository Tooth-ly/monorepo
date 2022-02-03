import { Flex } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { MainDashboardCardData } from '../../data';
import { ImageStyle, Title } from './styled';

interface MainDashboardCardProps {
  cardData: MainDashboardCardData
}

const MainDashboardCard: React.FC<MainDashboardCardProps> = ({ cardData }) => {
  const { imageURL, title, appName } = cardData
  const router = useRouter()
  return (
    <Flex flexDir={'column'} onClick={() => router.push(`/${appName}`)}>
      <ImageStyle src={imageURL} height={100} width={100} />
      <Title>{title}</Title>
    </Flex >
  )
};


export default MainDashboardCard;
