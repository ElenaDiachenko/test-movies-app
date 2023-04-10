import styled, { css } from 'styled-components/native';

export const PosterBox = styled.View`
  width: 100%;
  margin-bottom: 12px;
  position: relative;
`;

export const Button = styled.TouchableOpacity`
  position: absolute;
  bottom: 4%;
  width: 60px;
  height: 60px;
  border-radius: 60px;
  background-color: rgba(225, 225, 225, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PlayButton = styled(Button)`
  left: 10%;
`;

export const AddButton = styled(Button)`
  right: 10%;
`;
export const Overview = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.TEXT_COLOR};
    font-weight: 400;
    font-size: 16px;
  `}
`;

export const AdultContainer = styled.View`
  ${({ theme }) => css`
    color: black;
    background-color: ${theme.colors.ACCENT_COLOR};
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: auto;
    padding: 0.5px 3px;
    border-radius: 2px;
  `}
`;

export const Rating = styled.Text`
  ${({ theme }) => css`
    color: #1080e9;
    font-weight: bold;
  `}
`;
