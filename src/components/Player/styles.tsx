import styled, { css } from 'styled-components/native';

export const RowContainer = styled.FlatList`
  margin-top: 15px;
`;

export const RowItem = styled.TouchableOpacity`
  ${({ theme }) => css`
    overflow: hidden;
    border-radius: 6px;
    position: relative;
    height: 220px;
  `}
`;

export const RowItemTitleBox = styled.View`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 40px;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 6px;
`;
export const RowItemTitle = styled.Text`
  color: #ffffff;
  font-weight: 400;
  font-size: 12px;
`;
