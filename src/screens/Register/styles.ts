import styled, { css } from 'styled-components/native';

export const Container = styled.SafeAreaView`
  ${({ theme }) => css`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 30px;
    background-color: ${theme.colors.BACKGROUND_COLOR};
  `}
`;
