import React, { FC, useState, useEffect } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';

import { MovieItemType, TransformedMoviesType } from 'types';
import { Container } from 'components/shared';
import { API } from 'utils';
import VerticalList from 'components/VerticalList';

const Popular: FC = () => {
  const [query, setQuery] = useState('sunny');
  const [renderData, setRenderData] = useState<MovieItemType[] | []>([]);

  const { data, isLoading, error, isFetchingNextPage, hasNextPage, fetchNextPage } =
    useInfiniteQuery<TransformedMoviesType>({
      queryKey: ['movies', `${query}`],
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
    </Container>
  );
};

export default Popular;
