import React, {useRef} from 'react';
import {
  View,
  Image,
  Dimensions,
  TouchableWithoutFeedback,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import YellowButton from './components/yellow-button';
import PurpleButton from './components/purple-button';
import {Carousel} from '../../components/carousel';
import {Button} from '../../components/button';
import * as SC from './Onboarding.styles';

type SlideProps = {
  onNextPress: (slideIndex: number) => void;
};

export const SlideOneScreen = ({onNextPress}: SlideProps) => {
  return (
    <SC.Container>
      <SC.Content>
        <Image
          source={require('../../assets/images/device-with-hands-and-bags.png')}
        />
        <SC.Title>choose your favorite food</SC.Title>
        <SC.Description>
          Let's choose your favorite food of choice with our application.
        </SC.Description>
      </SC.Content>
      <SC.NavbarButton color="#FCBA26">
        <SC.NavBar>
          <TouchableWithoutFeedback
            onPress={() => {
              onNextPress?.(1);
            }}>
            <YellowButton />
          </TouchableWithoutFeedback>
        </SC.NavBar>
      </SC.NavbarButton>
    </SC.Container>
  );
};

export const SlideTwoScreen = ({onNextPress}: SlideProps) => {
  return (
    <SC.Container color="#FCBA26">
      <SC.Content>
        <Image
          source={require('../../assets/images/bike-and-scooter-delivery.png')}
        />
        <SC.Title>delicious food menu</SC.Title>
        <SC.Description>
          Your order is ready to be picked up and sent directly by our courier.
        </SC.Description>
      </SC.Content>
      <SC.NavbarButton color="#AE60ED">
        <SC.NavBar>
          <TouchableWithoutFeedback
            onPress={() => {
              onNextPress?.(2);
            }}>
            <PurpleButton />
          </TouchableWithoutFeedback>
        </SC.NavBar>
      </SC.NavbarButton>
    </SC.Container>
  );
};

export const SlideThreeScreen = () => {
  const navigation = useNavigation();
  return (
    <SC.Container color="#AE60ED">
      <SC.Content>
        <Image source={require('../../assets/images/mobile-choice-food.png')} />
        <SC.Title>we have 5000+ review on our app</SC.Title>
        <SC.Description>
          we have 5000+ users review, you can check in app store
        </SC.Description>
        <SC.ButtonWrapper>
          <Button
            title="Get Started"
            onPress={() => navigation.navigate('GetStarted')}
          />
        </SC.ButtonWrapper>
      </SC.Content>
    </SC.Container>
  );
};

export const OnboardingScreen: React.FC = () => {
  const {width: windowWidth} = Dimensions.get('window');
  const ref = useRef<ScrollView>();

  const goToSlide = (slideIndex: number) => {
    ref?.current?.scrollTo({
      x: slideIndex * windowWidth,
    });
  };

  return (
    <SC.OnboardingContainer>
      <Carousel ref={ref}>
        <SlideOneScreen onNextPress={goToSlide} />
        <SlideTwoScreen onNextPress={goToSlide} />
        <SlideThreeScreen />
      </Carousel>
    </SC.OnboardingContainer>
  );
};
