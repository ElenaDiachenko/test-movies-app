import React from 'react';
import { View } from 'react-native';
import { constants } from 'utils';
import { RowContainer } from 'components/RowList/styles';

const Sceleton = () => {
  return (
    <RowContainer
      horizontal
      data={new Array(10)}
      renderItem={() => (
        <View
          style={{
            height: 200,
            aspectRatio: constants.ASPECT_RATIO,
            backgroundColor: 'light-gray',
            overflow: 'hidden',
            borderRadius: 12,
          }}
        />
      )}
      showsHorizontalScrollIndicator={false}
      ItemSeparatorComponent={() => <View style={{ width: 12 }} />}
    />
  );
};

export default Sceleton;
