import { Dimensions } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.dark};
  align-items: center;
  padding: ${Dimensions.get("window").height * 0.15}px 28px;
  padding-bottom: ${Dimensions.get("window").height * 0.06}px;
`;

export const Heading = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.semi};
  font-size: ${({ theme }) => theme.fontSize.lg};
  margin: 57px 33px;
  text-align: center;
`;
