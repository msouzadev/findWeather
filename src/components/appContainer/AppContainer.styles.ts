import Constants from "expo-constants";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.dark};
  padding: ${Constants.statusBarHeight + 20}px 0 0 16px;
`;
