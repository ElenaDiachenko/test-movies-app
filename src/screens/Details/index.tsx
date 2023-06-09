import React from 'react';

import { useQuery } from '@tanstack/react-query';
import { AntDesign } from '@expo/vector-icons';
import { ScrollView, Image, StyleSheet, ActivityIndicator, View } from 'react-native';
import { shallow } from 'zustand/shallow';
import { useTheme } from 'styled-components';

import { useStore } from 'stores/store';
import { GenreDataType } from 'types/index';
import { HomeStackScreenProps } from 'navigation/types';
import { PosterBox, PlayButton, AddButton, Overview, Rating } from './styles';

import { Container, Title, ScreenWidth, ScreenHeight, Subtitle } from 'components/shared';
import { API, constants } from 'utils/index';
import { RowList, Header } from 'components/index';
const fakePoster = require('../../../assets/images/fake-poster-details.jpg');

const Details = ({ navigation, route }: HomeStackScreenProps<'Details'>) => {
  const theme = useTheme();
  const navigate = () => navigation.goBack();
  const { movieId, prevRoute } = route.params;

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
        <ActivityIndicator
          color={theme.colors.ACCENT_COLOR}
          size={ScreenHeight > ScreenWidth ? ScreenWidth / 6 : ScreenHeight / 6}
        />
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
      <Header prevRoute={prevRoute} navigate={navigate} title={'Details'} />
      <ScrollView>
        {data && (
          <>
            <PosterBox
              style={{
                aspectRatio: constants.ASPECT_RATIO,
              }}>
              <Image
                source={
                  data.poster_path
                    ? {
                        uri: `${constants.TMDB_IMAGE_URL}${data.poster_path}`,
                      }
                    : fakePoster
                }
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
            <View style={{ paddingHorizontal: 12, paddingBottom: 12 }}>
              <View style={{ flexDirection: 'row', marginBottom: 6 }}>
                <Rating>
                  {data.vote_average
                    ? (data.vote_average * 10).toFixed(0).toString().split('').join('.')
                    : 0}
                </Rating>
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
          </>
        )}

        {data && movieId && (
          <RowList
            title={'Recommendations'}
            fetchData={API.fetchRecommendation}
            queryKey={`recommendations , ${movieId}`}
            movieId={data.id}
          />
        )}
      </ScrollView>
    </Container>
  );
};

export default Details;
