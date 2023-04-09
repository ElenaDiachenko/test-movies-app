import React, { FC } from 'react';
import { ScrollView } from 'react-native';

import { Container } from 'components/shared';
import { constants, movieRowType } from 'utils';
import RowList from 'components/RowList';

const Home: FC = () => {
  return (
    <Container>
      <ScrollView>
        {constants.movieRows.map((row: movieRowType) => (
          <RowList
            key={row.id}
            title={row.title}
            fetchData={row.fetchData}
            queryKey={row.queryKey}
          />
        ))}
      </ScrollView>
    </Container>
  );
};

export default Home;
