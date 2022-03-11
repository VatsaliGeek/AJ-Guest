import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export const COLORS = {
  primary: '#76dafe',
  secondary: '#3b6c82',
  blue: '#04e0e8',
  black: '#000000',
  white: '#ffffff',
  lightBlue: '#6392a6',
  red: '#fe7a87',
  lightGray: '#9fb5c0',
};

export const SIZES = {
  // global sizes
  base: 8,
  font: 14,
  radius: 20,
  padding: 24,
  margin: 10,

  // font sizes
  hugeTitle: 44,
  bigTitle: 30,
  title: 24,
  smallTitle: 20,
  caption: 13,
  body: 14,
  buttonText: 14,
  smallText: 12,
  inputs: 16,

  // app dimensions
  width,
  height,
};

export const FONTS = {
  hugeTitle: {
    fontSize: SIZES.hugeTitle,
    lineHeight: 48,
  },
  bigTitle: {
    fontSize: SIZES.bigTitle,
    lineHeight: 32,
  },
  title: {
    fontSize: SIZES.title,
    lineHeight: 26,
  },
  smallTitle: {
    fontSize: SIZES.smallTitle,
    lineHeight: 22,
  },
  caption: {
    fontSize: SIZES.caption,
    lineHeight: 18,
  },
  body: {
    fontSize: SIZES.body,
    lineHeight: 20,
  },
  buttonText: {
    fontSize: SIZES.buttonText,
    lineHeight: 20,
  },
  smallText: {
    fontSize: SIZES.smallText,
    lineHeight: 20,
  },
  inputs: {
    fontSize: SIZES.inputs,
    lineHeight: 20,
  },
  placeHolder: {
    fontSize: SIZES.inputs,
    lineHeight: 20,
  },
};

const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;