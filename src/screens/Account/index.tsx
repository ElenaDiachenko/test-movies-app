import React from 'react';
import { shallow } from 'zustand/shallow';

import { useStore } from 'stores/store';
import { Container } from 'components/shared';
import VerticalList from 'components/VerticalList';

const Account = () => {
  const { movies, deleteMovie, isLoading, error } = useStore(
    (state) => ({
      error: state.errorMovies,
      movies: state.movies,
      isLoading: state.loadingMovies,
      deleteMovie: state.deleteSavedMovie,
    }),
    shallow
  );
  return (
    <Container>
      <VerticalList
        movies={movies}
        isLoading={isLoading}
        error={error}
        numColumns={2}
        deleteMovie={deleteMovie}
        notFoundMessage={'No saved movie... '}
      />
    </Container>
  );
};

export default Account;
