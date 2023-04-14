import React, { memo, useCallback, FC } from 'react';
import { View, Image, StyleSheet, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from 'styled-components';

import { HomeScreenNavigationProp } from 'navigation/types';
import { ListContainer, ListItem, ItemTitle, TitleBox, RemoveBox } from './styles';
import ListItemSceleton from '../ListItemSceleton';
import { Container, Title } from 'components/shared';
import { constants } from 'utils/index';
import { SavedMovie, MovieItemType } from 'types/index';
const fakePoster = require('../../../assets/images/fake-poster.jpg');

type VerticalListProps = {
  movies: MovieItemType[] | SavedMovie[];
  isLoading: boolean;
  error: unknown;
  deleteMovie?: (movie: SavedMovie) => void;
  numColumns?: number;
  onEndReached?: () => void;
  onEndReachedThreshold?: number;
  isFetchingNextPage?: boolean;
  notFoundMessage: string;
  prevRoute?: string;
};

const VerticalList: FC<VerticalListProps> = ({
  movies,
  isLoading,
  error,
  deleteMovie,
  numColumns,
  onEndReached,
  onEndReachedThreshold,
  isFetchingNextPage,
  notFoundMessage,
  prevRoute,
}) => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const theme = useTheme();

  const renderItem = useCallback(
    ({ item }: any) => (
      <ListItem
        onPress={() => navigation.navigate('Details', { movieId: item.id, prevRoute })}
        style={{
          aspectRatio: constants.ASPECT_RATIO,
        }}>
        <Image
          source={
            item.poster_path
              ? {
                  uri: `${constants.TMDB_IMAGE_URL}${item.poster_path}`,
                }
              : fakePoster
          }
          style={StyleSheet.absoluteFill}
          resizeMode="cover"
        />
        {deleteMovie ? (
          <RemoveBox onPress={() => deleteMovie(item)}>
            <Ionicons name="ios-close-outline" size={30} color="white" />
          </RemoveBox>
        ) : null}
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
      {isLoading && !movies.length ? (
        <ListItemSceleton />
      ) : movies.length ? (
        <ListContainer
          data={movies}
          numColumns={numColumns}
          renderItem={renderItem}
          onEndReached={onEndReached}
          onEndReachedThreshold={onEndReachedThreshold}
          ListFooterComponent={
            isFetchingNextPage ? (
              <ActivityIndicator
                size={30}
                color={theme.colors.ACCENT_COLOR}
                style={{ height: 220, alignSelf: 'center', marginLeft: 6 }}
              />
            ) : null
          }
        />
      ) : (
        <Container>
          <Title>{notFoundMessage}</Title>
        </Container>
      )}
    </View>
  );
};

export default memo(VerticalList);
