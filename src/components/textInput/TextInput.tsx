import React from "react";
import {
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
} from "react-native";
import { Container } from "./TextInput.styles";
import { AntDesign } from "@expo/vector-icons";

interface TextInputProps {
  inputProps: RNTextInputProps;
}
const TextInput = (props: TextInputProps) => {
  const { inputProps } = props;
  return (
    <Container>
      <AntDesign name="search1" size={24} color={"white"} />
      <RNTextInput
        {...inputProps}
        style={{ flex: 1, paddingLeft: 12, color: "white", fontSize: 16 }}
      />
    </Container>
  );
};

export default TextInput;
