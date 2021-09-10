import { lightColors, darkColors } from "./variables";

export type ThemeType = typeof darkTheme;

export const darkTheme = {
  body: darkColors.veryDarkBlue,
  text: '#fff',
  listItem: darkColors.veryDarkDesaturatedBlue,
  listItemBorder: darkColors.veryDarkGrayishBlue,
  checkBoxBorder: darkColors.veryDarkGrayishBlue,
};

export const lightTheme: ThemeType = {
  body: lightColors.veryLightGray,
  text: darkColors.darkGrayishBlue,
  listItem: '#fff',
  listItemBorder: darkColors.darkGrayishBlue,
  checkBoxBorder: lightColors.veryDarkGrayishBlue,
}

const theme = darkTheme;
export default theme;
