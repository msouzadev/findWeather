import React, { useEffect } from "react";

import { Container } from "./Home.styles";

import Text from "@components/text/Text";
import { Image } from "react-native";
import { ScrollView } from "react-native";
import { theme } from "@styles/theme/theme";

const climateChangeImg = require("@assets/climate-change.png");
const Home = () => {
  useEffect(() => {}, []);
  return (
    <ScrollView
      style={{ backgroundColor: theme.colors.dark }}
      contentContainerStyle={{
        flex: 1,
        paddingHorizontal: 16,
        paddingBottom: 30,
      }}
    >
      <Container>
        <Text fontSize="xxl" style={{ textAlign: "center" }}>
          Find
          <Text variant="bold" fontSize="xxl">
            Weather
          </Text>
        </Text>

        <Image
          source={climateChangeImg}
          style={{ alignSelf: "center", marginTop: 40 }}
        />
      </Container>

      <Text color="gray100" fontSize="md" style={{ textAlign: "center" }}>
        Selecione aqui um local e{"\n"} encontre o clima em tempo real
      </Text>
    </ScrollView>
  );
};

export default Home;
