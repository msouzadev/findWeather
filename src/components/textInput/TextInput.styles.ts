import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  flex-direction: row;
  border-radius: 11px;
  padding: 0 11px;
  align-items: center;
  height: 50px;
  background-color: ${({ theme }) => theme.colors.dark400};
`;
