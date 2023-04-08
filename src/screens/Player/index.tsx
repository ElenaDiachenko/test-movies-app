import React, { FC } from 'react';
import { useRoute } from '@react-navigation/native';
import { useQuery } from '@tanstack/react-query';
import { Container, Title } from 'components/shared';
import { PlayerScreenRouteProp } from 'navigation/types';
import { VideoDataType, VideoDataItemType } from 'types';
import { API, constants } from 'utils';
import { ScrollView, View, Image, StyleSheet, Text } from 'react-native';

const Player: FC = () => {
  const route = useRoute<PlayerScreenRouteProp>();

  const { movieId } = route.params;

  const {
    data = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ['videos', movieId],
    queryFn: () => API.fetchVideo(movieId),
  });

  console.log(data);
  if (isLoading)
    return (
      <View>
        <Title>Loading...</Title>
      </View>
    );
  if (error)
    return (
      <View>
        <Title>An error has occured...</Title>
      </View>
    );
  return (
    <Container>
      <Title>{movieId}</Title>
    </Container>
  );
};

export default Player;
