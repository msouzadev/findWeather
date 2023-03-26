import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const BackButton = styled.TouchableOpacity`
  border: 1px solid ${({ theme }) => theme.colors.gray600};
  height: 40px;
  width: 40px;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
`;
