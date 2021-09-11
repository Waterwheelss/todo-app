import { lightColors, darkColors } from "./variables";

export type ThemeType = typeof darkTheme;

export const darkTheme = {
  body: darkColors.veryDarkBlue,
  textPrimary: '#fff',
  textSecondary: darkColors.darkGrayishBlue,
  textHover: darkColors.brightBlue,
  listItem: darkColors.veryDarkDesaturatedBlue,
  listItemBorder: darkColors.veryDarkGrayishBlue,
  checkBoxBorder: darkColors.veryDarkGrayishBlue,
};

export const lightTheme: ThemeType = {
  body: lightColors.veryLightGray,
  textPrimary: darkColors.darkGrayishBlue,
  textSecondary: darkColors.veryDarkDesaturatedBlue,
  textHover: darkColors.brightBlue,
  listItem: '#fff',
  listItemBorder: darkColors.darkGrayishBlue,
  checkBoxBorder: lightColors.veryDarkGrayishBlue,
}

const theme = darkTheme;
export default theme;
