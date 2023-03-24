import {Dimensions} from 'react-native';
import styled from 'styled-components/native';
const {width: windowWidth, height: windowHeight} = Dimensions.get('window');

export const Container = styled.SafeAreaView<{color?: string}>`
  flex: 1;
  width: ${windowWidth}px;
  justify-content: center;
  background-color: ${({color}) => color || '#fff'};
`;

export const Content = styled.View`
  align-items: center;
  gap: 24px;
`;

export const NavBar = styled.View`
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
`;

export const NavbarButton = styled.View<{color?: string}>`
  position: absolute;
  width: 15px;
  height: ${Dimensions.get('window').height}px;
  right: 0;
  background-color: ${({color}) => color || '#fff'};
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
