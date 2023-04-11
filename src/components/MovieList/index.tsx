import React, { memo, useCallback } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { shallow } from 'zustand/shallow';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

import { useStore } from 'stores/store';
import { HomeScreenNavigationProp } from 'navigation/types';
import { ListContainer, ListItem, ItemTitle, TitleBox, RemoveBox } from './styles';
import ListItemSceleton from 'components/ListItemSceleton';
import { Container, Title } from 'components/shared';

import { constants } from 'utils';
import { SavedMovie } from 'types';

const MovieList = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const { movies, deleteMovie, isLoading, error } = useStore(
    (state) => ({
      error: state.errorMovies,
      movies: state.movies,
      isLoading: state.loadingMovies,
      deleteMovie: state.deleteSavedMovie,
    }),
    shallow
  );

  const renderItem = useCallback(
    ({ item }: { item: SavedMovie }) => (
      <ListItem
        onPress={() => navigation.navigate('Details', { movieId: item.id })}
        style={{
          aspectRatio: constants.ASPECT_RATIO,
        }}>
        <Image
          source={{
            uri: `${constants.TMDB_IMAGE_URL}${item.poster_path}`,
          }}
          style={StyleSheet.absoluteFill}
          resizeMode="cover"
        />
        <RemoveBox onPress={() => deleteMovie(item)}>
          <Ionicons name="ios-close-outline" size={30} color="white" />
        </RemoveBox>
        <TitleBox>
          <ItemTitle>{item.title}</ItemTitle>
        </TitleBox>
      </ListItem>
    ),
    []
  );

  if (error)
    return (
      <Container>
        <Title>An error has occured...</Title>
      </Container>
    );

  return (
    <View style={{ paddingBottom: 12 }}>
      {isLoading && !movies ? (
        <ListItemSceleton />
      ) : movies.length ? (
        <ListContainer data={movies} numColumns={2} renderItem={renderItem} />
      ) : (
        <Container>
          <Title>No saved movie... </Title>
        </Container>
      )}
    </View>
  );
};

export default memo(MovieList);
