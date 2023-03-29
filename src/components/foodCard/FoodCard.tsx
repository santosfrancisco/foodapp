import React from 'react';
import {ImageSourcePropType, TouchableOpacityProps} from 'react-native';
import * as SC from './FoodCard.styles';

export type FoodCardProps = {
  id: string;
  image: ImageSourcePropType;
  name: string;
  price: string;
  onPress: Pick<TouchableOpacityProps, 'onPress'>;
};

export const FoodCard = ({image, name, price, onPress}: FoodCardProps) => {
  return (
    <SC.Container onPress={onPress}>
      <SC.FoodImage resizeMode="contain" source={image} />
      <SC.FoodCardTitle numberOfLines={1}>{name}</SC.FoodCardTitle>
      <SC.FoodCardPrice>{price}</SC.FoodCardPrice>
    </SC.Container>
  );
};
