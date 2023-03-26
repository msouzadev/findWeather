import { Dimensions } from "react-native";
import styled from "styled-components/native";

const cardWidth = Dimensions.get("window").width * 0.45 - 16;
export const CityCardContainer = styled.TouchableOpacity`
  border: 1.5px solid ${({ theme }) => theme.colors.dark100};
  width: ${cardWidth}px;
  height: 164px;
  border-radius: 20px;
  margin: 10px 10px;
  padding: 15px;
`;
export const CardHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
