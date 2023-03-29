import {Dimensions} from 'react-native';
import styled from 'styled-components/native';
const {width: windowWidth} = Dimensions.get('window');

export const Container = styled.SafeAreaView<{color?: string}>`
  flex: 1;
  justify-content: space-between;
  width: ${windowWidth}px;
  background-color: ${({color}) => color || '#fff'};
`;

export const Content = styled.View`
  margin-top: 20%;
  align-items: center;

  gap: 24px;
`;

export const Title = styled.Text`
  font-weight: 900;
  font-size: 28.6701px;
  line-height: 38px;
  text-transform: capitalize;
  text-align: center;

  color: #1a1a1a;
  width: 50%;
`;

export const Description = styled.Text`
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  text-transform: capitalize;

  color: #1a1a1a;
  width: 70%;
`;

export const PrivacyText = styled.Text`
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
  text-align: center;
  letter-spacing: 0.5px;

  color: #1a1a1a;
`;

export const ButtonWrapper = styled.View`
  width: 80%;
  gap: 18px;
`;
