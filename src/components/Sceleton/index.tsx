import React from 'react';
import { View } from 'react-native';
import { useTheme } from 'styled-components';
import { constants } from 'utils/index';
import { RowContainer } from 'components/RowList/styles';

const Sceleton = () => {
  const theme = useTheme();
  return (
    <RowContainer
      horizontal
      data={new Array(10)}
      renderItem={() => (
        <View
          style={{
            height: 200,
            aspectRatio: constants.ASPECT_RATIO,
            backgroundColor: theme.colors.SECONDARY_COLOR,
            borderRadius: 6,
          }}
        />
      )}
      showsHorizontalScrollIndicator={false}
      ItemSeparatorComponent={() => <View style={{ width: 12 }} />}
    />
  );
};

export default Sceleton;
