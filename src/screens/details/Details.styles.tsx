import styled from 'styled-components/native';
import {Dimensions} from 'react-native';
const {width} = Dimensions.get('window');

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const ButtonWrapper = styled.TouchableOpacity`
  padding: 16px;
`;

export const BGImage = styled.ImageBackground.attrs({
  imageStyle: {
    width,
    height: 300,
  },
  resizeMode: 'cover',
})`
  width: ${width}px;
  position: absolute;
  top: 0;
`;

export const DetailsHeader = styled.View`
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  height: 60px;
`;

export const TopInfoWrapper = styled.View`
  align-items: center;
`;

export const TopInfoTitle = styled.Text`
  font-size: 24px;
  font-weight: 600;
  color: #1a1a1a;
`;

export const TopInfoDescriptionWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 8px;
`;

export const TopInfoDescription = styled.Text`
  font-size: 14px;
  color: #1a1a1a;
`;

export const MealImage = styled.Image`
  width: ${width / 1.5}px;
  height: ${width / 1.5}px;
`;

export const DetailsContainer = styled.View`
  flex: 1;
  padding: 0 16px;
  justify-content: space-between;
`;

export const DetailsTitle = styled.Text`
  font-weight: 500;
  font-size: 18px;
  color: #1a1a1a;
  margin-bottom: 12px;
`;
export const DetailsDescription = styled.Text`
  font-weight: 400;
  font-size: 14px;
  color: #1a1a1a;
`;
