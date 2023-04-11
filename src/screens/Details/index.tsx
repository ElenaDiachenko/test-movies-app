import React, { useEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useQuery } from '@tanstack/react-query';
import { AntDesign } from '@expo/vector-icons';
import { ScrollView, Image, StyleSheet, Text, ActivityIndicator, View } from 'react-native';
import { shallow } from 'zustand/shallow';

import { useStore } from 'stores/store';
import { GenreDataType } from 'types';
import { DetailsScreenRouteProp, DetailsScreenNavigationProp } from 'navigation/types';
import { PosterBox, PlayButton, AddButton, Overview, AdultContainer, Rating } from './styles';
import { Container, Title, ScreenWidth, ScreenHeight, Subtitle } from 'components/shared';
import { API, constants } from 'utils';

const Details = () => {
  const route = useRoute<DetailsScreenRouteProp>();
  const navigation = useNavigation<DetailsScreenNavigationProp>();

  const { movieId } = route.params;
  const { data, isLoading, error } = useQuery({
    queryKey: ['movies', movieId],
    queryFn: () => API.fetchMovieById(movieId),
  });

  const { addMovie, loadingMovies } = useStore(
    (state) => ({
      addMovie: state.addSavedMovie,
      loadingMovies: state.loadingMovies,
    }),
    shallow
  );

  if (isLoading)
    return (
      <Container>
        <ActivityIndicator size={ScreenHeight > ScreenWidth ? ScreenWidth / 6 : ScreenHeight / 6} />
      </Container>
    );
  if (error)
    return (
      <Container>
        <Title>An error has occured...</Title>
      </Container>
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

          <PlayButton onPress={() => navigation.navigate('PlayVideo', { movieId: data.id })}>
            <AntDesign name="caretright" size={30} color="black" />
          </PlayButton>
          <AddButton onPress={() => addMovie(data.id, data.title, data.poster_path)}>
            {loadingMovies ? (
              <ActivityIndicator size={30} color="#000000" />
            ) : (
              <AntDesign name="plus" size={30} color="#000000" />
            )}
          </AddButton>
        </PosterBox>
        <View style={{ paddingHorizontal: 12 }}>
          <View style={{ flexDirection: 'row', marginBottom: 6 }}>
            <Rating>
              {data.vote_average
                ? (data.vote_average * 10).toFixed(0).toString().split('').join('.')
                : 0}
            </Rating>

            <AdultContainer>
              <Text style={{ fontWeight: '700' }}>{data.adult ? '18+' : '12+'}</Text>
            </AdultContainer>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Title>{data.title}</Title>
            <Overview>{`  ( ${data.release_date.slice(0, 4)} )`}</Overview>
          </View>
          <Subtitle style={{ textDecorationLine: 'underline' }}>
            Genres: {data.genres.map((genre: GenreDataType) => genre?.name).join(' | ')}
          </Subtitle>

          <Overview style={{ marginTop: 12 }}>{data.overview}</Overview>
        </View>
      </ScrollView>
    </Container>
  );
};

export default Details;
