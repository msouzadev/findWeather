import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.dark300};
  border: 1px solid ${({ theme }) => theme.colors.gray300};
  border-radius: 18px;
  width: 100%;
  padding: 15px;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.regular};
  font-size: ${({ theme }) => theme.fontSize.md};
`;
