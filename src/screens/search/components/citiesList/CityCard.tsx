import Text from "@components/text/Text";
import React from "react";
import { Image, View } from "react-native";
import Animated, { SlideInRight } from "react-native-reanimated";
import { CardHeader, CityCardContainer } from "./CitiesList.styles";

const cloudImg = require("@assets/cloud.png");
interface CityCardProps {
  index: number;
  data: any;
}
const CityCard = ({ index }: CityCardProps) => {
  return (
    <Animated.View entering={SlideInRight.delay(index * 200)}>
      <CityCardContainer>
        <CardHeader>
          <View>
            <Text fontSize="md" variant="bold">
              13º
            </Text>
            <Text color="gray100" fontSize="xxs">
              Nublado
            </Text>
          </View>
          <Image source={cloudImg} />
        </CardHeader>
        <Text style={{ marginTop: 18 }} fontSize="sm">
          Santiago de Compostela, Espanha
        </Text>
      </CityCardContainer>
    </Animated.View>
  );
};

export default CityCard;
