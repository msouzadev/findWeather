import React from "react";
import { TouchableOpacityProps } from "react-native";

import { Container, Title } from "./Button.styles";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
}
const Button = (props: ButtonProps) => {
  const { title, ...rest } = props;
  return (
    <Container {...rest}>
      <Title>{title}</Title>
    </Container>
  );
};

export default Button;
