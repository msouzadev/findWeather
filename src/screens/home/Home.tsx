import React, { useEffect } from "react";

import Text from "@components/text/Text";
import { Image, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native";
import { theme } from "@styles/theme/theme";
import AppContainer from "@components/appContainer/AppContainer";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStack } from "src/@types/router";

const climateChangeImg = require("@assets/climate-change.png");
const Home = ({ navigation }: NativeStackScreenProps<RootStack>) => {
  useEffect(() => {}, []);

  const navigateToSearch = () => {
    navigation.navigate("Search");
  };
  return (
    <ScrollView
      style={{ backgroundColor: theme.colors.dark }}
      contentContainerStyle={{
        flex: 1,
        paddingHorizontal: 16,
        paddingBottom: 30,
      }}
    >
      <AppContainer>
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
      </AppContainer>

      <TouchableOpacity onPress={navigateToSearch}>
        <Text
          color="gray100"
          fontSize="md"
          style={{ textAlign: "center", textDecorationLine: "underline" }}
        >
          Selecione aqui um local e{"\n"} encontre o clima em tempo real
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Home;
