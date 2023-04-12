import React from 'react';
import { View } from 'react-native';
import { constants } from 'utils';
import { ListContainer } from 'components/VerticalList/styles';
import { useTheme } from 'styled-components';

const ListItemSceleton = () => {
  const theme = useTheme();
  return (
    <ListContainer
      data={new Array(8)}
      numColumns={2}
      renderItem={() => (
        <View
          style={{
            height: 270,
            aspectRatio: constants.ASPECT_RATIO,
            margin: 4,
            borderRadius: 6,
            backgroundColor: theme.colors.SECONDARY_COLOR,
          }}
        />
      )}
    />
  );
};

export default ListItemSceleton;
