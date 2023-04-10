import React, { FC, useState } from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { AuthScreenNavigationProp } from 'navigation/types';
import { LoginTitle } from './styles';
import { FormContainer } from 'components/shared';
import { Input } from 'components/Input';
import { Button } from 'components/Button';
import { LinkAuth } from 'components/LinkAuth';

const Login: FC = () => {
  const navigation = useNavigation<AuthScreenNavigationProp>();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = () => navigation.navigate('Register');

  const onSubmit = async () => {
    setLoading(true);

    const credentials = {
      email,
      password,
    };
    console.log(credentials);
    setLoading(false);
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
        <LinkAuth title="Don't have an account? Sign Up" navigate={navigate} />
      </View>
    </FormContainer>
  );
};

export default Login;
