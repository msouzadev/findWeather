import Constants from "expo-constants";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.dark};
  padding: ${Constants.statusBarHeight + 20}px 16px 0 16px;
`;

export const LocationIconContainer = styled.View`
  width: 46px;
  height: 46px;
  border-radius: 11px;
  background-color: ${({ theme }) => theme.colors.dark400};
  justify-content: center;
  align-items: center;
  margin: 0 16px;
`;
