import React, { FC } from 'react';
import { useRoute } from '@react-navigation/native';
import { Container, Title } from 'components/shared';
import { PlayerScreenRouteProp } from 'navigation/types';

const Player: FC = () => {
  const route = useRoute<PlayerScreenRouteProp>();

  const { movieId } = route.params;
  return (
    <Container>
      <Title>{movieId}</Title>
    </Container>
  );
};

export default Player;
