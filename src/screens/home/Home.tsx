import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, Button} from 'react-native';
import * as SC from './styles';

export const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <SC.Container>
      <Text>Home Screen</Text>
      <Button
        title="Go to details"
        onPress={() => navigation.navigate('Details')}
      />
    </SC.Container>
  );
};
