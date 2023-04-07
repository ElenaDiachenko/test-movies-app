import React, { FC } from 'react';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native';

import { Container } from 'components/shared';
import { HomeScreenNavigationProp } from 'navigation/types';
import { constants, movieRowType } from 'utils';

import RowList from 'components/RowList';

const Home: FC = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  // const page = 3;
  // const {
  //   data: trendingData,
  //   isLoading: trendingIsLoading,
  //   error: trendingError,
  // } = useQuery({
  //   queryKey: ['trending-movies'],
  //   queryFn: () => API.fetchTrending(page),
  // });
  // const {
  //   data: popularData,
  //   isLoading: popularIsLoading,
  //   error: popularError,
  // } = useQuery({
  //   queryKey: ['popular-movies'],
  //   queryFn: () => API.fetchPopular(page),
  // });
  // const {
  //   data: topRatedData,
  //   isLoading: topRatedIsLoading,
  //   error: topRatedError,
  // } = useQuery({
  //   queryKey: ['topRated-movies'],
  //   queryFn: () => API.fetchTopRated(page),
  // });

  // if (trendingIsLoading || popularIsLoading || topRatedIsLoading)
  //   return (
  //     <Container>
  //       <Title>Loading...</Title>
  //     </Container>
  //   );
  // if (trendingError || popularError || topRatedError)
  //   return (
  //     <Container>
  //       <Title>An error has occured...</Title>
  //     </Container>
  //   );

  return (
    <Container>
      <ScrollView>
        {constants.movieRows.map((row: movieRowType) => (
          <RowList
            key={row.id}
            title={row.title}
            fetchData={row.fetchData}
            queryKey={row.queryKey}
          />
        ))}
      </ScrollView>
    </Container>
  );
};

export default Home;
