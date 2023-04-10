import styled, { css } from 'styled-components/native';

type BtnProps = {
  width?: string;
  height: string;
  radius: string;
};
export const StyledBtn = styled.TouchableOpacity<BtnProps>`
  ${({ theme, width, height, radius }) => css`
    width: ${width ? `${width}` : '100%'};
    height: ${height};
    margin: 24px auto 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius:${radius}
    background-color: ${theme.colors.ACCENT_COLOR};
    color: ${theme.colors.TITLE_COLOR};
  `}
`;

export const ButtonTitle = styled.Text`
  ${({ theme }) => css`
    font-size: 16px;
    color: #ffffff;
  `}
`;
