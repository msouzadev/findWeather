import React, { useEffect, useState } from "react";

import Text from "@components/text/Text";
import { Image, TouchableOpacity, View } from "react-native";
import { ScrollView } from "react-native";
import { theme } from "@styles/theme/theme";
import AppContainer from "@components/appContainer/AppContainer";
import { RootStack } from "src/@types/router";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import WeatherDescription from "./components/weatherDescription/WeatherDescription";

const climateChangeImg = require("@assets/climate-change.png");

const rainingImg = require("@assets/raining-middle.png");
const EmptyState = () => {
  const navigation = useNavigation<NavigationProp<RootStack>>();
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
const Home = () => {
  const [isEmpty, setIsEmpty] = useState(false);
  useEffect(() => {}, []);
  if (isEmpty) {
    return <EmptyState />;
  }
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
        <View>
          <Text style={{ textAlign: "center" }} fontSize="sm">
            A Coruña, Espanha
          </Text>
          <Text style={{ textAlign: "center" }} color="gray100" fontSize="xs">
            Domingo, 01 Jan de 2023
          </Text>
        </View>
        <Image
          style={{
            alignSelf: "center",
            width: 172,
            height: 140,
            marginTop: 40,
            marginBottom: 10,
          }}
          resizeMode="center"
          source={rainingImg}
        />
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ textAlign: "center" }} fontSize="giant" variant="bold">
            23
          </Text>
          <Text style={{ height: 80 }} fontSize="xxl">
            º
          </Text>
        </View>

        <Text style={{ textAlign: "center" }} color="gray100" fontSize="lg">
          Chuva Moderada
        </Text>

        <WeatherDescription />
      </AppContainer>
    </ScrollView>
  );
};

export default Home;
