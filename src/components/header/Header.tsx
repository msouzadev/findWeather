import Button from "@components/button/Button";
import React from "react";
import { View } from "react-native";
import { BackButton, Container } from "./Header.styles";

import { Ionicons } from "@expo/vector-icons";
import Text from "@components/text/Text";
import { useNavigation } from "@react-navigation/native";

interface HeaderProps {
  title?: string | React.ReactElement;
}
const Header = ({ title }: HeaderProps) => {
  const navigation = useNavigation();
  return (
    <Container>
      <BackButton onPress={navigation.goBack}>
        <Ionicons name="chevron-back-outline" size={24} color="white" />
      </BackButton>

      {typeof title === "string" ? <Text fontSize="sm">{title}</Text> : title}
      <View style={{ width: 40, height: 40 }} />
    </Container>
  );
};

export default Header;
