import AppContainer from "@components/appContainer/AppContainer";
import Header from "@components/header/Header";
import TextInput from "@components/textInput/TextInput";
import React, { useState } from "react";
import { View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Container, LocationIconContainer } from "./Search.styles";
import CitiesList from "./components/citiesList/CitiesList";
import useDebouncedCallback from "src/hooks/useDebounce";
import { useFetch } from "@services/useFetch/useFetch";
import { WEATHER_API_KEY, WEATHER_API_URL } from "@env";
import { isEmpty } from "@utils/empty";
import { ForecastResponse } from "src/@types/weather-api";
import { theme } from "@styles/theme/theme";

const Search = () => {
  const [fetchError, setFetchError] = useState(false);
  const {
    doFetch: searchCity,
    data: searchResults,
    isFetching,
    updateData,
  } = useFetch("", "get", {
    defaultValue: [],
    onSuccess: (data) => {
      if (isEmpty(data)) {
        setFetchError(true);
      }
    },
    onError: () => {
      setFetchError(true);
    },
  });

  const [changeText] = useDebouncedCallback((text) => {
    setFetchError(false);
    if (!text) {
      updateData([]);
      return;
    }
    searchCity(
      { params: { q: text, key: WEATHER_API_KEY } },
      `${WEATHER_API_URL}/search.json`
    );
  }, 500);

  return (
    <Container>
      <Header title="Buscar" />
      <View style={{ flexDirection: "row", marginVertical: 30 }}>
        <TextInput
          inputProps={{
            onChangeText: changeText,
            placeholder: "Digite o nome de uma cidade",
            placeholderTextColor: theme.colors.gray100,
          }}
        />
        <LocationIconContainer>
          <MaterialIcons name="location-on" size={24} color="white" />
        </LocationIconContainer>
      </View>
      <CitiesList
        isLoading={isFetching}
        data={searchResults}
        hasError={fetchError}
      />
    </Container>
  );
};

export default Search;
