import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Image} from 'react-native';
import {Button} from '../../components/button';
import {Input} from '../../components/input';
import * as SC from './Login.styles';

export const LoginScreen = () => {
  const [username, setUsername] = useState<string>();
  const [password, setPassword] = useState<string>();
  const navigation = useNavigation();
  return (
    <SC.Container color="#FCBA26">
      <SC.Content>
        <Image source={require('../../assets/images/food.png')} />
        <SC.Title>Hello Again!</SC.Title>
        <SC.Subtitle>Welcome back you’ve been missed!</SC.Subtitle>
        <SC.InputsContainer>
          <Input
            label="Username"
            placeholder="username"
            onChangeText={setUsername}
          />
          <Input
            label="Password"
            placeholder="Password"
            onChangeText={setPassword}
            secureTextEntry={true}
          />
          <Button
            fullWidth
            disabled={!username || !password}
            title="Login"
            onPress={() =>
              navigation.reset({
                index: 1,
                routes: [{name: 'App'}],
              })
            }
          />
        </SC.InputsContainer>
      </SC.Content>
      <SC.SignUpText>
        Don’t have an account?{' '}
        <SC.SignUpTextLink onPress={() => navigation.navigate('SignUp')}>
          Sign Up
        </SC.SignUpTextLink>
      </SC.SignUpText>
    </SC.Container>
  );
};
