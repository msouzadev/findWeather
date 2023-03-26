import React, { useEffect, useState } from "react";

import Text from "@components/text/Text";
import { Image, TouchableOpacity, View } from "react-native";
import { ScrollView } from "react-native";
import { theme } from "@styles/theme/theme";
import AppContainer from "@components/appContainer/AppContainer";
import { RootStack } from "src/@types/router";
import {
  NavigationProp,
  useIsFocused,
  useNavigation,
} from "@react-navigation/native";
import WeatherDescription from "./components/weatherDescription/WeatherDescription";
import TodayAndNextFiveDays from "./components/todayAndNextFiveDays/TodayAndNextFiveDays";
import { useFetch } from "@services/useFetch/useFetch";
import { getItem } from "@utils/storage";
import { WEATHER_API_URL, WEATHER_API_KEY } from "@env";
import { ForecastResponse } from "src/@types/weather-api";
import { isEmpty } from "@utils/empty";

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
  // const [isEmpty, setIsEmpty] = useState(false);
  const [isLoadingCity, setIsLoadingCity] = useState(true);

  const {
    doFetch: getForecastDetails,
    isFetching,
    data: currentForecastData,
  } = useFetch<ForecastResponse>("");

  const isFocused = useIsFocused();
  const getStoredCity = async () => {
    const city = await getItem("city");
    if (!!city) {
      console.tron("request");
      getForecastDetails(
        { params: { q: city, lang: "pt", key: WEATHER_API_KEY } },
        `${WEATHER_API_URL}/current.json`
      );
    }
    console.log({ city });
  };

  useEffect(() => {
    if (isFocused) {
      getStoredCity();
    }
  }, [isFocused]);
  useEffect(() => {}, []);
  if (isEmpty(currentForecastData) || isFetching) {
    return <EmptyState />;
  }
  return (
    <AppContainer>
      <View>
        <Text style={{ textAlign: "center" }} fontSize="sm">
          {currentForecastData.location.name},{" "}
          {currentForecastData.location.country}
        </Text>
        <Text
          style={{ textAlign: "center", textTransform: "capitalize" }}
          color="gray100"
          fontSize="xs"
        >
          {new Intl.DateTimeFormat("pt-BR", { dateStyle: "full" }).format(
            new Date(currentForecastData.location.localtime)
          )}
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
          {currentForecastData.current.temp_c}
        </Text>
        <Text style={{ height: 80 }} fontSize="xxl">
          º
        </Text>
      </View>

      <Text style={{ textAlign: "center" }} color="gray100" fontSize="lg">
        {currentForecastData.current.condition.text}
      </Text>

      <WeatherDescription />
      <TodayAndNextFiveDays />
    </AppContainer>
  );
};

export default Home;
