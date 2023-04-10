import styled, { css } from 'styled-components/native';

export const LinkBox = styled.TouchableOpacity`
  ${({ theme }) => css`
    margin: 18px auto;
  `}
`;

export const StyledText = styled.Text`
  ${({ theme }) => css`
    font-size: 16px;
    color: ${theme.colors.BUTTON_COLOR};
  `}
`;
