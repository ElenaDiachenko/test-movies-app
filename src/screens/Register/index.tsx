import React, { FC, useState } from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { shallow } from 'zustand/shallow';

import { AuthScreenNavigationProp } from 'navigation/types';
import { useStore } from 'stores/store';
import { RegisterTitle } from './styles';
import { FormContainer } from 'components/shared';
import { Input } from 'components/Input';
import { Button } from 'components/Button';
import { LinkAuth } from 'components/LinkAuth';

export type RegisterCredentials = {
  name: string;
  email: string;
  password: string;
};

const Register: FC = () => {
  const navigation = useNavigation<AuthScreenNavigationProp>();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { register, loading, error } = useStore(
    (state) => ({
      loading: state.loading,
      error: state.error,
      register: state.registerUser,
    }),
    shallow
  );

  const navigate = () => navigation.navigate('Login');

  const onSubmit = async () => {
    const credentials = {
      name,
      email,
      password,
    };
    console.log(credentials);
    register(credentials);
    reset();
  };

  const reset = () => {
    setEmail('');
    setPassword('');
    setName('');
  };

  return (
    <FormContainer>
      <View style={{ width: '100%' }}>
        <RegisterTitle>REGISTER</RegisterTitle>
        <Input placeholder={'Name'} value={name} setValue={setName} />
        <Input placeholder={'Email'} value={email} setValue={setEmail} />
        <Input
          placeholder={'Password'}
          value={password}
          setValue={setPassword}
          secureTextEntry={true}
        />
        <Button text="Sign Up" onPress={onSubmit} loading={loading} />
        <LinkAuth title="Already have an account? Sign In" navigate={navigate} />
      </View>
    </FormContainer>
  );
};

export default Register;
