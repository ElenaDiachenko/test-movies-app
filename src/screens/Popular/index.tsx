import React, { FC } from 'react';
import { Pressable } from 'react-native';
import { Container, Title } from 'components/shared';
import { useNavigation } from '@react-navigation/native';
import { HomeScreenNavigationProp } from 'navigation/types';

const movie = {
  id: 1,
  title: ' First movie title',
};

const Popular: FC = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  return (
    <Container>
      <Title>Popular</Title>
      <Pressable
        style={{ height: 20 }}
        onPress={() => navigation.navigate('Details', { movieId: movie.id })}>
        <Title> From popular</Title>
      </Pressable>
    </Container>
  );
};

export default Popular;
