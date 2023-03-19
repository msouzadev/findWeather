import { Colors } from "@styles/theme/colors";
import { FontFamily, FontSize } from "@styles/theme/fonts";
import styled from "styled-components/native";
import { color } from "styled-system";
import { TextProps } from "./Text";
// bold = "Overpass_700Bold",
// semi = "Overpass_600SemiBold",
// regular = "Overpass_400Regular",
// light = "Overpass_300Light",
const getFontWeight = (weight: string) => {
  const weights: { [key: string]: {} } = {
    bold: "Overpass_700Bold",
    semi: "Overpass_600SemiBold",
    light: "Overpass_300Light",
    regular: "Overpass_300Light",
  };
  return weights[weight] || "Overpass_400Regular";
};

export const StyledText = styled.Text<TextProps>`
  font-family: ${({ variant }) => getFontWeight(variant || "regular")};
  font-size: ${({ fontSize, theme }) => theme.fontSize[fontSize || "md"]};
  color: ${({ theme, color }) => theme.colors[color || "white"]};
`;
