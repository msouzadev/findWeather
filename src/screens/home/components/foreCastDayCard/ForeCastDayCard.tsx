import Text from "@components/text/Text";
import React from "react";
import { Image, View } from "react-native";

import { Container } from "./ForeCastDayCard.styles";

const rainMiniature = require("@assets/wind-miniature.png");
const ForecastDayCard = () => {
  return (
    <Container>
      <View style={{ flexDirection: "row" }}>
        <Text variant="bold" fontSize="sm">
          23
        </Text>
        <Text
          color="gray100"
          variant="light"
          fontSize="xxs"
          // style={{ height: 30 }}
        >
          º
        </Text>
      </View>

      <Image source={rainMiniature} />
      <Text>09:00</Text>
    </Container>
  );
};

export default ForecastDayCard;
