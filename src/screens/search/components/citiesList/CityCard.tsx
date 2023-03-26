import Text from "@components/text/Text";
import { WEATHER_API_URL, WEATHER_API_KEY } from "@env";
import { useFetch } from "@services/useFetch/useFetch";
import { isEmpty } from "@utils/empty";
import React, { useEffect } from "react";
import { Image, View } from "react-native";
import Animated, { SlideInRight } from "react-native-reanimated";
import { ForecastResponse } from "src/@types/weather-api";
import { City } from "./CitiesList";
import { CardHeader, CityCardContainer } from "./CitiesList.styles";

interface CityCardProps {
  index: number;
  data: City;
  onPressCity: (city: string) => any;
}
const CityCard = ({ index, data, onPressCity }: CityCardProps) => {
  const {
    doFetch: getForecast,
    data: forecastData,
    isFetching,
  } = useFetch<ForecastResponse>(`${WEATHER_API_URL}/forecast.json`, "get", {});
  useEffect(() => {
    getForecast({ params: { q: data.name, key: WEATHER_API_KEY, lang: "pt" } });
  }, []);

  const hasData = !isEmpty(forecastData);
  const handlePressCard = (city: string) => () => {
    onPressCity(city);
  };
  return (
    <Animated.View entering={SlideInRight.delay(index * 200)}>
      <CityCardContainer onPress={handlePressCard(data.name)}>
        <CardHeader>
          <View>
            <Text fontSize="md" variant="bold">
              {isFetching || !hasData ? "" : `${forecastData.current.temp_c}º`}
            </Text>
            <Text color="gray100" fontSize="xxs" style={{ maxWidth: 90 }}>
              {isFetching || !hasData
                ? ""
                : `${forecastData.current.condition.text}`}
            </Text>
          </View>
          {isFetching || !hasData ? (
            <></>
          ) : (
            <Image
              style={{ width: 40, height: 40 }}
              source={{ uri: `http:${forecastData.current.condition.icon}` }}
            />
          )}
        </CardHeader>
        <Text style={{ marginTop: 18 }} fontSize="sm">
          {data.name}, {data.country}
        </Text>
      </CityCardContainer>
    </Animated.View>
  );
};

export default CityCard;
