import Constants from "expo-constants";
import styled from "styled-components/native";

export const Container = styled.ScrollView.attrs({
  contentContainerStyle: { flex: 1 },
})`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.dark};
  padding: ${Constants.statusBarHeight + 20}px 16px 0 16px;
`;
