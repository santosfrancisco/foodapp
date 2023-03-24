import React from 'react';
import {View, Text, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export const DetailsScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{color: 'red'}}>Details Screen</Text>
      <Button title="Go to home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};
