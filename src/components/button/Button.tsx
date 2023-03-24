import React from 'react';
import {Container, Title} from './Button.styles';

type ButtonProps = {
  title: string;
  onPress: () => void;
  outlined?: boolean;
  disabled?: boolean;
};

export const Button = ({title, onPress, outlined, disabled}: ButtonProps) => {
  return (
    <Container onPress={onPress} outlined={outlined} disabled={disabled}>
      <Title outlined={outlined}>{title}</Title>
    </Container>
  );
};
