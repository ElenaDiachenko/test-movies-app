import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { shallow } from 'zustand/shallow';

import { useStore } from 'stores/store';
import { Container, Title } from 'components/shared';

const Account = () => {
  const { movies, deleteMovie, setMovies } = useStore(
    (state) => ({
      error: state.errorMovies,
      movies: state.movies,
      setMovies: state.setSavedMovies,
      deleteMovie: state.deleteSavedMovie,
    }),
    shallow
  );
  useEffect(() => {
    (async () => {
      await setMovies();
    })();
  }, []);

  console.log(movies);

  return (
    <Container>
      <Title>Account</Title>
    </Container>
  );
};

export default Account;

const styles = StyleSheet.create({});
