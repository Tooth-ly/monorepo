import { Flex } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { ImageStyle, Title } from './styled';
import { Module } from '../../types';

interface MainDashboardCardProps {
  module: Module;
}

const MainDashboardCard: React.FC<MainDashboardCardProps> = ({ module }) => {
  const { iconUrl, title, appName } = module;
  const router = useRouter();
  return (
    <Flex flexDir={'column'} onClick={() => router.push(`/${appName}`)}>
      <ImageStyle src={iconUrl} height={100} width={100} />
      <Title>{title}</Title>
    </Flex>
  );
};

export default MainDashboardCard;
