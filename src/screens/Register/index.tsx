import React, { FC, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { AuthScreenNavigationProp } from 'navigation/types';

import { FormContainer } from 'components/shared';
import { Input } from 'components/Input';
import { Button } from 'components/Button';
import { LinkAuth } from 'components/LinkAuth';

const Register: FC = () => {
  const navigation = useNavigation<AuthScreenNavigationProp>();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = () => navigation.navigate('Login');

  const onSubmit = async () => {
    setLoading(true);

    const credentials = {
      name,
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
    setName('');
  };

  return (
    <FormContainer>
      <View style={{ width: '100%' }}>
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
