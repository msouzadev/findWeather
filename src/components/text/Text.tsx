import { Colors } from "@styles/theme/colors";
import { FontFamily, FontSize } from "@styles/theme/fonts";
import React, { PropsWithChildren } from "react";
import { TextStyle } from "react-native";
import { StyledText } from "./Text.styles";

export interface TextProps extends PropsWithChildren {
  variant?: keyof typeof FontFamily;
  fontSize?: keyof typeof FontSize;
  color?: keyof typeof Colors;
  style?: TextStyle;
}
const Text = ({ children, ...rest }: TextProps) => {
  return <StyledText {...rest}>{children}</StyledText>;
};

export default Text;
