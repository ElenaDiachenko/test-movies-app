import React from 'react';
import { useRoute } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import { DetailsScreenRouteProp } from 'navigation/types';
import { useQuery } from '@tanstack/react-query';
import { ScrollView, View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';

import { Container, Title } from 'components/shared';
import { MovieItemType } from 'types';
import { API, constants } from 'utils';
import { PosterBox, PlayButton, AddButton } from './styles';

const Details = () => {
  const route = useRoute<DetailsScreenRouteProp>();
  const { movieId } = route.params;
  const { data, isLoading, error } = useQuery({
    queryKey: ['movies', movieId],
    queryFn: () => API.fetchMovieById(movieId),
  });

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
      <ScrollView>
        <PosterBox
          style={{
            aspectRatio: constants.ASPECT_RATIO,
          }}>
          <Image
            source={{
              uri: `${constants.TMDB_IMAGE_URL}/${data.poster_path}`,
            }}
            resizeMode="cover"
            style={StyleSheet.absoluteFill}
          />

          <PlayButton>
            <AntDesign name="caretright" size={30} color="black" />
          </PlayButton>
          <AddButton>
            <AntDesign name="plus" size={30} color="black" />
          </AddButton>
        </PosterBox>
        <Title>{data.title}</Title>
        <Text style={{ color: 'white', fontSize: 15, marginTop: 12 }}>{data.overview}</Text>
      </ScrollView>
    </Container>
  );
};

export default Details;
