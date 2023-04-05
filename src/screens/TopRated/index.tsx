import React, { FC } from 'react';
import { View, Text, Pressable } from 'react-native';

import { Container, Title } from 'components/shared';
import { HomeScreenNavigationProp } from 'navigation/types';
import { useNavigation } from '@react-navigation/native';

const movie = {
  id: 1,
  title: ' First movie title',
};

const TopRated: FC = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  return (
    <Container>
      <Title>TopRated</Title>
      <Pressable
        style={{ height: 20 }}
        onPress={() => navigation.navigate('Details', { movieId: movie.id })}>
        <Text> From TopRated</Text>
      </Pressable>
    </Container>
  );
};

export default TopRated;
