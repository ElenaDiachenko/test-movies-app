import styled, { css } from 'styled-components/native';

export const RegisterTitle = styled.Text`
  ${({ theme }) => css`
    font-weight: 500;
    font-size: 27px;
    margin-bottom: 24px;
    align-self: center;
    color: ${theme.colors.TITLE_COLOR};
  `}
`;
