import styled, { css } from 'styled-components/native';

export const RowContainer = styled.FlatList`
  margin-top: 15px;
`;

export const RowItem = styled.TouchableOpacity`
  ${({ theme }) => css`
    overflow: hidden;
    border-radius: 6px;
    height: 220px;
  `}
`;
