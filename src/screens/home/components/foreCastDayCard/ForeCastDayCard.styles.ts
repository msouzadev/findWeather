import styled from "styled-components/native";

export const Container = styled.View`
  border: 1.5px solid ${({ theme }) => theme.colors.dark100};
  border-radius: 20px;
  padding: 8px 20px;
  background-color: ${({ theme }) => theme.colors.dark300};
  margin-right: 18px;
  justify-content: space-between;
  align-items: center;
  max-height: 120px;
`;
