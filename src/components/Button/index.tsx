import { FC } from 'react';
import { ActivityIndicator } from 'react-native';
import { ButtonTitle, StyledBtn } from './styles';

type ButtonProps = {
  text: string;
  loading: boolean;
  onPress: () => void;
};

const Button: FC<ButtonProps> = ({ text, onPress, loading }) => {
  return (
    <StyledBtn activeOpacity={0.8} height={'50px'} radius={'50px'} width={'90%'} onPress={onPress}>
      {loading ? (
        <ActivityIndicator size={30} color="#ffffff" />
      ) : (
        <ButtonTitle>{text}</ButtonTitle>
      )}
    </StyledBtn>
  );
};

export default Button;
