import Text from "@components/text/Text";
import { theme } from "@styles/theme/theme";
import React from "react";
import { Image, View } from "react-native";
import {
  Container,
  DescriptionItem,
  VerticalLine,
} from "./WeatherDescription.styles";

const dropMiniature = require("@assets/drop-miniature.png");

const WeatherDescription = () => {
  return (
    <Container>
      <DescriptionItem>
        <Image source={dropMiniature} />
        <Text variant="bold" fontSize="xs" style={{ marginTop: 5 }}>
          24%
        </Text>
        <Text color="gray400" fontSize="xxs">
          Umidade
        </Text>
      </DescriptionItem>
      <VerticalLine />
      <DescriptionItem>
        <Image source={dropMiniature} />
        <Text variant="bold" fontSize="xs" style={{ marginTop: 5 }}>
          24km/h
        </Text>
        <Text color="gray400" fontSize="xxs">
          Umidade
        </Text>
      </DescriptionItem>
      <VerticalLine />

      <DescriptionItem>
        <Image source={dropMiniature} />
        <Text variant="bold" fontSize="xs" style={{ marginTop: 5 }}>
          76%
        </Text>
        <Text color="gray400" fontSize="xxs">
          Umidade
        </Text>
      </DescriptionItem>
    </Container>
  );
};

export default WeatherDescription;
