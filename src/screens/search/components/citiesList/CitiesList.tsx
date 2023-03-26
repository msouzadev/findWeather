import React from "react";
import {
  FlatList,
  Image,
  ListRenderItem,
  ListRenderItemInfo,
  View,
} from "react-native";
import CityCard from "./CityCard";
import { WEATHER_API_URL } from "@env";
import Text from "@components/text/Text";
const notFoundDestinationImg = require("@assets/not-found-destination.png");

export interface City {
  id: number;
  name: string;
  region: string;
  country: string;
  lat: number;
  lon: number;
  url: string;
}
interface CitiesListProps {
  data: City[];
  hasError: boolean;
  isLoading: boolean;
}

interface EmptyStateCitiesProps {
  hasError: boolean;
  isLoading: boolean;
}
const EmptyStateCities = ({ hasError, isLoading }: EmptyStateCitiesProps) => {
  if (isLoading) {
  }
  if (hasError) {
    return (
      <View style={{ alignItems: "center" }}>
        <Image source={notFoundDestinationImg} />
        <Text
          variant="semi"
          color="gray100"
          style={{ marginTop: 30, marginBottom: 18 }}
        >
          OPS!
        </Text>
        <Text variant="semi" color="gray100" style={{ textAlign: "center" }}>
          Não foi possível encontrar o local {"\n"} desejado!
        </Text>
      </View>
    );
  }
  return <></>;
};
const CitiesList = ({ data, hasError, isLoading }: CitiesListProps) => {
  const renderCityCard = ({ item, index }: ListRenderItemInfo<City>) => (
    <CityCard index={index} data={item} />
  );
  console.log({ hasError });
  return (
    <FlatList
      data={data}
      numColumns={2}
      renderItem={renderCityCard}
      ListEmptyComponent={() => (
        <EmptyStateCities hasError={hasError} isLoading={isLoading} />
      )}
    />
  );
};

export default CitiesList;
