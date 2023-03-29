import React from 'react';
import {Image, Text, useWindowDimensions, View} from 'react-native';
import {Button} from '../button';

import * as SC from './PromotionCard.styles';

export const PromotionCard = () => {
  const {width} = useWindowDimensions();
  return (
    <SC.Wrapper>
      <SC.Container>
        <View style={{width: '50%', padding: 12, alignItems: 'flex-start'}}>
          <Text style={{fontWeight: '400', fontSize: 10, color: '#1a1a1a'}}>
            Get Special Discount
          </Text>
          <Text style={{fontWeight: '800', fontSize: 26, color: '#1a1a1a'}}>
            80% OFF
          </Text>
          <Button small title="Claim voucher" onPress={() => {}} />
        </View>
        <SC.PromotionImage source={require('../../assets/images/meal.png')} />
      </SC.Container>
    </SC.Wrapper>
  );
};
