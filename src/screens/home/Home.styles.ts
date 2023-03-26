import styled from "styled-components/native";
import Constants from "expo-constants";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.dark};
  padding: ${Constants.statusBarHeight + 40}px 0 0 16px;
`;
