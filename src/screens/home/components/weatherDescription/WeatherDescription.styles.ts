import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  border: 1px solid ${({ theme }) => theme.colors.gray600};
  border-radius: 18px;
  margin: 45px 0;
  padding: 10px 16px;
`;

export const DescriptionItem = styled.View`
  align-items: center;
  justify-content: center;
`;

export const VerticalLine = styled.View`
  width: 1;
  background-color: ${({ theme }) => theme.colors.gray600};
  align-self: center;
  height: 36px;
`;
