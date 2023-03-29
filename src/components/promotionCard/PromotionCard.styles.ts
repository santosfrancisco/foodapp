import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

const w = Dimensions.get('window').width;
const foo = w - 32 + 'px';

export const Wrapper = styled.View`
  width: ${foo};
  height: 156px;
  margin-top: 16px;
`;

export const Container = styled.View`
  position: relative;
  height: 92px;
  background-color: #fabc26;
  border-radius: 5px;
`;

export const PromotionImage = styled.Image`
  position: absolute;
  right: 0;
  top: 0;
`;
