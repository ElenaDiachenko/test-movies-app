import React, { FC } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Pressable } from 'react-native';
import { Container, Title } from 'components/shared';
import { HomeScreenNavigationProp } from 'navigation/types';

const movie = {
  id: 1,
  title: ' First movie title',
};
const Home: FC = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  console.log(process.env.TMDB_API_KEY);
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
