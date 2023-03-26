import React from "react";
import { TextInput as RNTextInput } from "react-native";
import { Container } from "./TextInput.styles";
import { AntDesign } from "@expo/vector-icons";

const TextInput = () => {
  return (
    <Container>
      <AntDesign name="search1" size={24} color={"white"} />
      <RNTextInput
        style={{ flex: 1, paddingLeft: 12, color: "white", fontSize: 16 }}
      />
    </Container>
  );
};

export default TextInput;
