import {Dimensions} from 'react-native';
import styled from 'styled-components/native';
const {width: windowWidth, height: windowHeight} = Dimensions.get('window');

export const Container = styled.SafeAreaView<{color?: string}>`
  flex: 1;
  justify-content: space-between;
  width: ${windowWidth}px;
  background-color: ${({color}) => color || '#fff'};
`;

export const Content = styled.View`
  margin-top: 10%;
  align-items: center;
  gap: 16px;
`;

export const Title = styled.Text`
  font-weight: 900;
  font-size: 28.6701px;
  text-transform: capitalize;
  text-align: center;

  color: #1a1a1a;
  width: 50%;
`;

export const Subtitle = styled.Text`
  font-weight: 400;
  font-size: 14px;
  line-height: 14px;
  text-align: center;
  color: #1a1a1a;
`;

export const Description = styled.Text`
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  text-transform: capitalize;
  color: #1a1a1a;
  width: 80%;
`;

export const SignUpText = styled.Text`
  font-weight: 400;
  font-size: 14px;
  text-align: center;
  letter-spacing: 0.5px;
  color: #1a1a1a;
`;

export const SignUpTextLink = styled.Text`
  font-weight: 600;
  font-size: 14px;
  text-align: center;
  letter-spacing: 0.5px;
  color: #1a1a1a;
`;
