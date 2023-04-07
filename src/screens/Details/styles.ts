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
