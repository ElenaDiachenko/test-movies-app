import React, { FC } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Pressable } from 'react-native';
import { Container, Title } from 'components/shared';
import { HomeScreenNavigationProp } from 'navigation/types';
import { useQuery, useQueries, UseQueryResult } from '@tanstack/react-query';
import { MovieItemType, MoviesDataType } from 'types/data';
import { fetchTrending, fetchPopular, fetchTopRated } from 'utils/tmdbApi';

const movie = {
  id: 1,
  title: ' First movie title',
};
const Home: FC = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const page = 3;
  const { data: trendingMovies } = useQuery({
    queryKey: ['trending-movies'],
    queryFn: () => fetchTrending(page),
  });
  console.log(trendingMovies.results[1].original_title);

  // const [trendingMovies, popularMovies, topRatedMovies] = useQueries<MoviesDataType[] | string[]>({
  //   queries: [
  //     {
  //       queryKey: ['trending'],
  //       queryFn: fetchTrending,
  //     },
  //     {
  //       queryKey: ['popular'],
  //       queryFn: fetchPopular,
  //     },
  //     {
  //       queryKey: ['topRated'],
  //       queryFn: fetchTopRated,
  //     },
  //   ],
  // });

  // if (trendingMovies.isLoading || popularMovies.isLoading || topRatedMovies.isLoading)
  //   return (
  //     <Container>
  //       <Title>Loading...</Title>
  //     </Container>
  //   );
  // if (trendingMovies.error || popularMovies.error || topRatedMovies.error)
  //   return (
  //     <Container>
  //       <Title>An error has occured...</Title>
  //     </Container>
  //   );
  // console.log(
  //   'trendingMovies####### :',
  //   trendingMovies,
  //   'popularMovies####### :',
  //   popularMovies,
  //   'topRatedMovies####### :',
  //   topRatedMovies
  // );
  // const page = 1;
  // const { isLoading, error, data, refetch } = useQuery({
  //   queryKey: ['movies'],
  //   queryFn: () => fetchTrending,
  // });
  // console.log(data);

  return (
    <Container>
      <Title>Home</Title>
      <Pressable
        style={{ height: 20 }}
        onPress={() => navigation.navigate('Details', { movieId: movie.id })}>
        <Title>{movie.title}</Title>
      </Pressable>
    </Container>
  );
};

export default Home;
