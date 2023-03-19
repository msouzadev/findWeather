import { ColorsTheme } from "../styles/theme/colors";
import { FontFamily, FontSize } from "../styles/theme/fonts";
export interface Theme {
  colors: ColorsTheme;
  fontSize: typeof FontSize;
  fontFamily: typeof FontFamily;
}
