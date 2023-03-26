import AppContainer from "@components/appContainer/AppContainer";
import Header from "@components/header/Header";
import TextInput from "@components/textInput/TextInput";
import React from "react";
import { View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { LocationIconContainer } from "./Search.styles";
import CitiesList from "./components/citiesList/CitiesList";

const Search = () => {
  return (
    <AppContainer>
      <Header title="Buscar" />
      <View style={{ flexDirection: "row", marginVertical: 30 }}>
        <TextInput />
        <LocationIconContainer>
          <MaterialIcons name="location-on" size={24} color="black" />
        </LocationIconContainer>
      </View>
      <CitiesList />
    </AppContainer>
  );
};

export default Search;
