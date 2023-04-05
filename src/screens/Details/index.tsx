import React from 'react';
import { useRoute } from '@react-navigation/native';
import { DetailsScreenRouteProp } from 'navigation/types';
import { Container, Title } from 'components/shared';

const Details = () => {
  const route = useRoute<DetailsScreenRouteProp>();

  const { movieId } = route.params;
  return (
    <Container>
      <Title>{`Details page ${movieId}`}</Title>
    </Container>
  );
};

export default Details;
