import React, { FC, memo, useCallback } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import { View, Image, StyleSheet, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { RowContainer, RowItem, RowItemTitle, RowItemTitleBox } from './styles';
import { MovieItemType, TransformedMoviesType } from 'types';
import { HomeScreenNavigationProp } from 'navigation/types';
import { Title, Container } from 'components/shared';
import Sceleton from 'components/Sceleton';

import { constants } from 'utils';

type RowPropsType = {
  title: string;
  fetchData: (page: number) => Promise<TransformedMoviesType>;
  queryKey: string;
};

const RowList: FC<RowPropsType> = ({ title, fetchData, queryKey }) => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const { data, isLoading, error, isFetchingNextPage, hasNextPage, fetchNextPage } =
    useInfiniteQuery<TransformedMoviesType>({
      queryKey: [`${queryKey}`],
      getNextPageParam: (prevData) => prevData.nextPage,
      queryFn: ({ pageParam = 1 }) => fetchData(pageParam),
    });

  const loadMore = () => {
    if (hasNextPage) {
      fetchNextPage();
    }
  };

  const renderItem = useCallback(
    ({ item }: { item: MovieItemType }) => (
      <RowItem
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
      <Title>{title}</Title>
      {isLoading ? (
        <Sceleton />
      ) : data ? (
        <RowContainer
          horizontal
          data={data.pages.map((page) => page.movies).flat()}
          showsHorizontalScrollIndicator={false}
          onEndReached={loadMore}
          onEndReachedThreshold={0.5}
          ListFooterComponent={
            isFetchingNextPage ? (
              <ActivityIndicator
                size={30}
                style={{ height: 220, alignSelf: 'center', marginLeft: 6 }}
              />
            ) : null
          }
          ItemSeparatorComponent={() => <View style={{ width: 12 }} />}
          renderItem={renderItem}
        />
      ) : null}
    </View>
  );
};

export default memo(RowList);
