import React from "react";
import { FlatList, ListRenderItem, ListRenderItemInfo } from "react-native";
import CityCard from "./CityCard";

const mockData = [
  {
    id: 288594,
    name: "Salvador",
    region: "Bahia",
    country: "Brazil",
    lat: -12.98,
    lon: -38.52,
    url: "salvador-bahia-brazil",
  },
  {
    id: 1860997,
    name: "Salvador",
    region: "Lanao del Norte",
    country: "Philippines",
    lat: 7.9,
    lon: 123.84,
    url: "salvador-lanao-del-norte-philippines",
  },
  {
    id: 3147690,
    name: "Salvador Rosas Magallon",
    region: "Baja California",
    country: "Mexico",
    lat: 31.9,
    lon: -116.55,
    url: "salvador-rosas-magallon-baja-california-mexico",
  },
  {
    id: 3165239,
    name: "Salvador Gonzalo Garcia",
    region: "Veracruz-Llave",
    country: "Mexico",
    lat: 18.63,
    lon: -96.42,
    url: "salvador-gonzalo-garcia-veracruz-llave-mexico",
  },
  {
    id: 3240787,
    name: "Salvador Urbina",
    region: "Chiapas",
    country: "Mexico",
    lat: 16.99,
    lon: -93.41,
    url: "salvador-urbina-chiapas-mexico",
  },
];

export interface City {
  id: number;
  name: string;
  region: string;
  country: string;
  lat: number;
  lon: number;
  url: string;
}
const CitiesList: React.FC = () => {
  const renderCityCard = ({ item, index }: ListRenderItemInfo<City>) => (
    <CityCard index={index} data={item} />
  );
  return (
    <FlatList data={mockData} numColumns={2} renderItem={renderCityCard} />
  );
};

export default CitiesList;
