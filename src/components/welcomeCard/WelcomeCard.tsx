import React from 'react';
import {View} from 'react-native';
import {ArrowIcon} from '../icons/Arrow';

import * as SC from './WelcomeCard.styles';

export const WelcomeCard = () => {
  return (
    <SC.WelcomeCard>
      <SC.UserInfoWrapper>
        <SC.UserImage source={require('../../assets/images/person.jpeg')} />
        <View>
          <SC.GreetingsText>Welcome</SC.GreetingsText>
          <SC.UserNameText>John Doe</SC.UserNameText>
        </View>
      </SC.UserInfoWrapper>
      <SC.ArrowButton onPress={() => {}}>
        <ArrowIcon color="#000" />
      </SC.ArrowButton>
    </SC.WelcomeCard>
  );
};
