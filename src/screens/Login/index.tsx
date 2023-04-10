import React, { FC, useState } from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { shallow } from 'zustand/shallow';

import { useStore } from 'stores/store';
import { AuthScreenNavigationProp } from 'navigation/types';
import { LoginTitle } from './styles';
import { FormContainer } from 'components/shared';
import { Input } from 'components/Input';
import { Button } from 'components/Button';
import { LinkAuth } from 'components/LinkAuth';

export type LoginCredentials = {
  email: string;
  password: string;
};

const Login: FC = () => {
  const navigation = useNavigation<AuthScreenNavigationProp>();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { loading, error, login } = useStore(
    (state) => ({
      loading: state.loading,
      error: state.error,
      login: state.loginUser,
    }),
    shallow
  );

  const navigate = () => navigation.navigate('Register');

  const onSubmit = async () => {
    const credentials = {
      email,
      password,
    };
    console.log(credentials, 'login');
    login(credentials);
    reset();
  };
  const reset = () => {
    setEmail('');
    setPassword('');
  };

  return (
    <FormContainer>
      <View style={{ width: '100%' }}>
        <LoginTitle>LOGIN</LoginTitle>

        <Input placeholder={'Email'} value={email} setValue={setEmail} />
        <Input
          placeholder={'Password'}
          value={password}
          setValue={setPassword}
          secureTextEntry={true}
        />
        <Button text="Sign Up" onPress={onSubmit} loading={loading} />
        <LinkAuth title="Don't have an account? Sign In" navigate={navigate} />
      </View>
    </FormContainer>
  );
};

export default Login;
