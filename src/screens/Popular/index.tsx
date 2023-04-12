import React, { FC, useState, useEffect } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from 'styled-components';

import { MovieItemType, TransformedMoviesType } from 'types/index';
import { Container } from 'components/shared';
import { InnerContainer, SearchBox } from './styles';
import { API } from 'utils/index';
import VerticalList from 'components/VerticalList';
import { Input } from 'components/Input';
import { useDebounce } from '../../hooks/index';

const Popular: FC = () => {
  const theme = useTheme();
  const [query, setQuery] = useState('');
  const [renderData, setRenderData] = useState<MovieItemType[] | []>([]);

  const debouncedQuery = useDebounce(query, 1000);

  const { data, isLoading, error, isFetchingNextPage, hasNextPage, fetchNextPage } =
    useInfiniteQuery<TransformedMoviesType>({
      queryKey: ['movies', `${debouncedQuery}`],
      getNextPageParam: (prevData) => prevData.nextPage,
      queryFn: ({ pageParam = 1 }) => API.fetchMovieByKeyword(pageParam, query),
    });

  const loadMore = () => {
    if (hasNextPage) {
      fetchNextPage();
    }
  };

  useEffect(() => {
    if (!data) return;
    setRenderData(data.pages.map((page) => page.movies).flat());
  }, [data]);

  return (
    <Container>
      <InnerContainer>
        <Input placeholder={'Search movies by keyword...'} value={query} setValue={setQuery} />
        <SearchBox>
          <Ionicons name="search" size={24} color={theme.colors.SECONDARY_COLOR} />
        </SearchBox>
      </InnerContainer>
      {debouncedQuery ? (
        <VerticalList
          movies={renderData}
          isLoading={isLoading}
          error={error}
          numColumns={2}
          onEndReached={loadMore}
          onEndReachedThreshold={0.5}
          isFetchingNextPage={isFetchingNextPage}
          notFoundMessage={`Not found movies by keyword ${query}`}
        />
      ) : null}
    </Container>
  );
};

export default Popular;
