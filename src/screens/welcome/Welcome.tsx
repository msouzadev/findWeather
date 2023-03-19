import React from "react";
import { Image } from "react-native";
import Text from "@components/text/Text";
import { Container, Heading } from "./Welcome.styles";
import cloudAndThunderImg from "@assets/cloud-and-thunder.png";
import Button from "@components/button/Button";

const Welcome = () => {
  return (
    <Container>
      <Image source={cloudAndThunderImg} />
      <Heading>Descubra o Clima {"\n"}na sua Cidade</Heading>
      <Text
        color="gray100"
        fontSize="md"
        style={{ textAlign: "center", flex: 1 }}
      >
        Com o{" "}
        <Text color="gray100" variant="semi">
          FindWeather
        </Text>{" "}
        nunca {"\n"}ficou tão fácil ter a previsão do {"\n"}
        tempo na palma da sua mão
      </Text>
      <Button title="Iniciar" style={{ marginBottom: 0 }} />
    </Container>
  );
};

export default Welcome;
