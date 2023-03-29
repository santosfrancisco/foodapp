import React from 'react';
import {View} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {ArrowIcon} from '../../components/icons/Arrow';
import {HeartIcon} from '../../components/icons/Heart';
import {FireIcon} from '../../components/icons/Fire';
import {Button} from '../../components/button';
import * as SC from './Details.styles';

export const DetailsScreen = () => {
  const navigation = useNavigation();
  const {params} = useRoute();
  const {item} = params;
  return (
    <SC.Container>
      <SC.BGImage source={require('../../assets/images/bg-details.png')} />

      <SC.DetailsHeader>
        <SC.ButtonWrapper onPress={() => navigation.goBack()}>
          <ArrowIcon color="#1a1a1a" />
        </SC.ButtonWrapper>
        <SC.ButtonWrapper>
          <HeartIcon color="#1a1a1a" />
        </SC.ButtonWrapper>
      </SC.DetailsHeader>
      <SC.TopInfoWrapper>
        <SC.TopInfoTitle>{item.name}</SC.TopInfoTitle>
        <SC.TopInfoDescriptionWrapper>
          <FireIcon color="#1a1a1a" />
          <SC.TopInfoDescription>{item.summary}</SC.TopInfoDescription>
        </SC.TopInfoDescriptionWrapper>
        <SC.MealImage source={item.image} />
      </SC.TopInfoWrapper>
      <SC.DetailsContainer>
        <View>
          <SC.DetailsTitle>Food Detail</SC.DetailsTitle>
          <SC.DetailsDescription>{item.details}</SC.DetailsDescription>
        </View>
        <Button fullWidth onPress={() => {}} title="Place Order" />
      </SC.DetailsContainer>
    </SC.Container>
  );
};
