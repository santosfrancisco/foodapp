import styled, {css} from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  gap: 6px;
`;

export const Label = styled.Text`
  font-weight: 400;
  font-size: 14px;
  line-height: 14px;

  color: #151515;
`;

export const StyledInput = styled.TextInput<{isSecure?: boolean}>`
  width: 100%;
  height: 48px;
  padding: 13px;
  border: 2px solid #000000;
  border-radius: 10px;
  font-size: 14px;

  ${({isSecure}) =>
    isSecure &&
    css`
      padding-right: 40px;
    `}
`;

export const IconWrapper = styled.TouchableOpacity`
  position: absolute;
  right: 0;
  padding: 13px;
`;
