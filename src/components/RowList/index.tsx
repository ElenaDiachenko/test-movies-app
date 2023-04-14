import React, { FC, memo, useCallback } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import { View, Image, StyleSheet, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components';

import { RowContainer, RowItem, RowItemTitle, RowItemTitleBox } from './styles';
import { TransformedMoviesType } from 'types/index';
import { HomeScreenNavigationProp } from 'navigation/types';
import { Title, Container } from 'components/shared';
import Sceleton from '../Sceleton';
import { constants } from 'utils/index';
const fakePoster = require('../../../assets/images/fake-poster.jpg');

type RowPropsType = {
  title: string;
  fetchData: (page: number, movieId?: number) => Promise<TransformedMoviesType>;
  queryKey: string;
  movieId?: number;
  prevRoute?: string;
};

const RowList: FC<RowPropsType> = ({ title, fetchData, queryKey, movieId, prevRoute }) => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const theme = useTheme();

  const { data, isLoading, error, isFetchingNextPage, hasNextPage, fetchNextPage } =
    useInfiniteQuery<TransformedMoviesType>({
      queryKey: [`${queryKey}`],
      getNextPageParam: (prevData) => prevData.nextPage,
      queryFn: ({ pageParam = 1 }) => fetchData(pageParam, movieId),
    });

  const loadMore = () => {
    if (hasNextPage) {
      fetchNextPage();
    }
  };

  const renderItem = useCallback(
    ({ item }: any) => (
      <RowItem
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
        <RowItemTitleBox>
          <RowItemTitle>{item.title}</RowItemTitle>
        </RowItemTitleBox>
      </RowItem>
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
      {isLoading ? (
        <Sceleton />
      ) : data?.pages[0].movies.length ? (
        <>
          <Title>{title}</Title>
          <RowContainer
            horizontal
            data={data.pages.map((page) => page.movies).flat()}
            keyExtractor={(item, index) => index.toString()}
            showsHorizontalScrollIndicator={false}
            onEndReached={loadMore}
            onEndReachedThreshold={0.5}
            ListFooterComponent={
              isFetchingNextPage ? (
                <ActivityIndicator
                  size={30}
                  color={theme.colors.ACCENT_COLOR}
                  style={{ height: 220, alignSelf: 'center', marginLeft: 6 }}
                />
              ) : null
            }
            ItemSeparatorComponent={() => <View style={{ width: 12 }} />}
            renderItem={renderItem}
          />
        </>
      ) : null}
    </View>
  );
};

export default memo(RowList);
