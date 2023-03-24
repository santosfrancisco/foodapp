import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Image} from 'react-native';
import {Button} from '../../components/button';
import * as SC from './GetStarted.styles';

export const GetStartedScreen = () => {
  const navigation = useNavigation();
  return (
    <SC.Container color="#FCBA26">
      <SC.Content>
        <Image source={require('../../assets/images/chinese-food.png')} />
        <SC.Title>Welcome!</SC.Title>
        <SC.Description>
          Come join us now create an account or log in.
        </SC.Description>
        <View style={{width: '80%', gap: 18}}>
          <Button
            outlined
            title="Login"
            onPress={() => navigation.navigate('Login')}
          />
          <Button
            title="Sign up"
            onPress={() => navigation.navigate('SignUp')}
          />
        </View>
      </SC.Content>
      <SC.PrivacyText>
        By signing up accept the Terms of Service and Privacy Policy.
      </SC.PrivacyText>
    </SC.Container>
  );
};
