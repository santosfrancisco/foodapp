import React from 'react';
import {Container, Title} from './Button.styles';

type ButtonProps = {
  title: string;
  onPress: () => void;
  outlined?: boolean;
  disabled?: boolean;
  small?: boolean;
  fullWidth?: boolean;
};

export const Button = ({
  title,
  onPress,
  outlined,
  disabled,
  small,
  fullWidth,
}: ButtonProps) => {
  return (
    <Container
      onPress={onPress}
      outlined={outlined}
      disabled={disabled}
      small={small}
      fullWidth={fullWidth}>
      <Title outlined={outlined} small={small}>
        {title}
      </Title>
    </Container>
  );
};
