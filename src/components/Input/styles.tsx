import styled, { css } from 'styled-components/native';

type InputProps = {
  isFocused: boolean;
};
export const StyleInput = styled.TextInput<InputProps>`
  ${({ theme, isFocused }) => css`
    width: 100%;
    margin-bottom: 15px
    padding-bottom: 15px;
    align-self: center;
    border-bottom-width:1px ;
    border-bottom-color: ${isFocused ? theme.colors.ACCENT_COLOR : theme.colors.SECONDARY_COLOR};
    color: ${theme.colors.TITLE_COLOR};
    font-weight:500;

  `}
`;
