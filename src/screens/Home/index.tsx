import React from 'react';
import { ScrollView } from 'react-native';

import { Container } from 'components/shared';
import { constants } from 'utils/index';
import RowList from 'components/RowList';
import { HomeTabScreenProps } from 'navigation/types';

const Home = ({ route }: HomeTabScreenProps<'Category'>) => {
  return (
    <Container>
      <ScrollView>
        {constants.movieRows.map((row: constants.movieRowType) => (
          <RowList
            key={row.id}
            title={row.title}
            fetchData={row.fetchData}
            queryKey={row.queryKey}
            prevRoute={route.name}
          />
        ))}
      </ScrollView>
    </Container>
  );
};

export default Home;
