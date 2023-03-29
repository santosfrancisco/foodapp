import React, {useState} from 'react';
import {TextInputProps, View} from 'react-native';
import {ClosedEyeIcon} from '../icons/ClosedEye';
import {EyeIcon} from '../icons/Eye';

import * as SC from './Input.styles';

type InputProps = {
  label: string;
} & TextInputProps;

export const Input = ({
  label,
  onChangeText,
  value,
  placeholder,
  secureTextEntry,
  ...restProps
}: InputProps) => {
  const [passwordIsVisible, setPasswordIsVisible] = useState(false);
  return (
    <SC.Container>
      <SC.Label>{label}</SC.Label>
      <View>
        <SC.StyledInput
          onChangeText={onChangeText}
          value={value}
          placeholder={placeholder}
          {...restProps}
          secureTextEntry={secureTextEntry && !passwordIsVisible}
          isSecure={secureTextEntry}
        />
        {secureTextEntry ? (
          <SC.IconWrapper
            onPress={() => setPasswordIsVisible(!passwordIsVisible)}>
            {passwordIsVisible ? (
              <ClosedEyeIcon color="#1a1a1a" />
            ) : (
              <EyeIcon color="#1a1a1a" />
            )}
          </SC.IconWrapper>
        ) : null}
      </View>
    </SC.Container>
  );
};
