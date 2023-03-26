import React, { PropsWithChildren } from "react";
import { View } from "react-native";
import { Container } from "./AppContainer.styles";

interface AppContainerProps {
  children: React.ReactElement | React.ReactElement[];
}
const AppContainer = ({ children }: AppContainerProps) => {
  return <Container>{children}</Container>;
};

export default AppContainer;
