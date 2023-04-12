import React, { FC, SetStateAction, Dispatch, useState } from 'react';
import { StyleInput } from './styles';

type InputProps = {
  placeholder: string;
  secureTextEntry?: boolean;
  value: string;
  setValue: Dispatch<SetStateAction<string>> | ((value: string) => void);
};

const Input: FC<InputProps> = ({ placeholder, secureTextEntry = false, value, setValue }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <StyleInput
      isFocused={isFocused}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      value={value}
      placeholderTextColor={'#73737d'}
      onChangeText={setValue}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
    />
  );
};

export default Input;
