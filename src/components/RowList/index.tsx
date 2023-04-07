import React, { FC } from 'react';
import { useQuery } from '@tanstack/react-query';
import { RowContainer, RowItem } from './styles';
import { View, Image, StyleSheet } from 'react-native';
import { MoviesDataType } from 'types/data';
import { Container, Title } from 'components/shared';
import { constants } from 'utils';
import { useNavigation } from '@react-navigation/native';
import { HomeScreenNavigationProp } from 'navigation/types';
import { MovieItemType } from 'types';

type RowPropsType = {
  title: string;
  fetchData: (page: number) => Promise<MoviesDataType>;
  queryKey: string;
};

const RowList: FC<RowPropsType> = ({ title, fetchData, queryKey }) => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const page = 3;
  const { data, isLoading, error } = useQuery({
    queryKey: [`${queryKey}`],
    queryFn: () => fetchData(page),
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
    <View style={{ paddingVertical: 12 }}>
      <Title>{title}</Title>
      <RowContainer
        horizontal
        data={data?.results}
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={{ width: 12 }} />}
        renderItem={({ item }: { item: MovieItemType }) => (
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
          </RowItem>
        )}
      />
    </View>
  );
};

export default RowList;
