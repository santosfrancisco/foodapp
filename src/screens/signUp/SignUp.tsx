import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {View, Image} from 'react-native';
import {Button} from '../../components/button';
import {Input} from '../../components/input';
import * as SC from './SignUp.styles';

export const SignUpScreen = () => {
  const [username, setUsername] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [passwordConfirmation, setPasswordConfirmation] = useState<string>();
  const navigation = useNavigation();
  return (
    <SC.Container color="#FCBA26">
      <SC.Content>
        <Image
          style={{width: 187, height: 187}}
          source={require('../../assets/images/food.png')}
        />
        <SC.Title>Sign Up</SC.Title>
        <SC.Subtitle>Enter your information to create an account!</SC.Subtitle>
        <View style={{width: '80%', gap: 18}}>
          <Input
            label="Username"
            placeholder="Username"
            onChangeText={setUsername}
          />
          <Input label="Email" placeholder="Email" onChangeText={setEmail} />
          <Input
            label="Password"
            placeholder="Password"
            onChangeText={setPassword}
            secureTextEntry={true}
          />
          <Input
            label="Repeat Password"
            placeholder="Repeat Password"
            onChangeText={setPasswordConfirmation}
            secureTextEntry={true}
          />
          <Button
            disabled={!username || !password || !email || !passwordConfirmation}
            title="Create account"
            onPress={() =>
              navigation.reset({
                index: 1,
                routes: [{name: 'Home'}],
              })
            }
          />
        </View>
      </SC.Content>
      <SC.SignUpText>
        Already have an account?{' '}
        <SC.SignUpTextLink onPress={() => navigation.navigate('Login')}>
          Login
        </SC.SignUpTextLink>
      </SC.SignUpText>
    </SC.Container>
  );
};
