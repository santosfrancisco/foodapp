import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {WelcomeCard} from '../../components/welcomeCard';
import {PromotionCard} from '../../components/promotionCard';
import {ListRenderItem, View} from 'react-native';
import {FoodCard, FoodCardProps} from '../../components/foodCard';
import * as SC from './Home.styles';

import {productsData} from './data';

export const HomeScreen = () => {
  const navigation = useNavigation();

  const renderItem: ListRenderItem<FoodCardProps> = ({item}) => {
    const handleOnPressFoodCard = () =>
      navigation.navigate({
        name: 'Details',
        params: {
          item,
        },
      });
    return (
      <FoodCard
        onPress={handleOnPressFoodCard}
        image={item.image}
        name={item.name}
        price={item.price}
      />
    );
  };
  return (
    <SC.Container>
      <View>
        <WelcomeCard />
        <PromotionCard />
        <SC.HomeCategoryTitle>Popular Food</SC.HomeCategoryTitle>
      </View>
      <SC.StyledFlatList
        data={productsData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SC.Container>
  );
};
