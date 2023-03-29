import styled from 'styled-components/native';
import {Dimensions} from 'react-native';
const w = Dimensions.get('window').width;
const cardWidth = w - 32 + 'px';

export const WelcomeCard = styled.View`
  width: ${cardWidth};
  height: 58px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  border-radius: 5px;
  padding: 0 14px;
`;

export const UserInfoWrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const UserImage = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  margin-right: 14px;
`;

export const GreetingsText = styled.Text`
  color: #1a1a1a;
  font-weight: 300;
  font-size: 10px;
`;

export const UserNameText = styled.Text`
  color: #1a1a1a;
  font-weight: 500;
  font-size: 14px;
`;

export const ArrowButton = styled.TouchableOpacity`
  padding: 6px;
  background-color: #fcba26;
  border-radius: 8px;
  transform: rotate(180deg);
`;
