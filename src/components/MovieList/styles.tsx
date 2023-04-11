import styled from 'styled-components/native';

export const ListContainer = styled.FlatList`
  margin-top: 15px;
`;

export const ListItem = styled.TouchableOpacity`
  margin: 4px;
  position: relative;
  height: 270px;
  border-radius: 6px;
  overflow: hidden;
`;

export const TitleBox = styled.View`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 40px;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 6px;
`;
export const ItemTitle = styled.Text`
  color: #ffffff;
  font-weight: 400;
  font-size: 12px;
`;
