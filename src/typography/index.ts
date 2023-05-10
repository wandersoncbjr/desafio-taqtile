import { colors } from "./colors";

export const constants = {
  font: {
    family: {
      primary: "Poppins",
    },
    lineHeight: {
      small: "40px",
      medium: "48px",
      large: "60px",
    },
    size: {
      xxxxLarge: "40px",

      xxxLarge: "36px",

      xxLarge: "28px",

      xLarge: "18px",

      large: "16px",

      medium: "14px",

      small: "12px",
    },
    weight: {
      extraBold: 800,
      bold: 700,
      semiBold: 600,
      medium: 500,
      regular: 400,
    },

    textDecoration: {
      textDecorationLine: "LineThrough",
    },
  },
};

export const typography = {
  body: {
    body1: {
      fontFamily: constants.font.family.primary,
      fontWeight: constants.font.weight.regular,
      fontSize: constants.font.size.large,
      lineHeight: constants.font.lineHeight.small,
      color: colors.NeutralXdark,
    },

    body2: {
      fontFamily: constants.font.family.primary,
      fontWeight: constants.font.weight.regular,
      fontSize: constants.font.size.medium,
      lineHeight: constants.font.lineHeight.small,
      color: colors.NeutralXdark,
    },
    body3: {
      fontFamily: constants.font.family.primary,
      fontWeight: constants.font.weight.bold,
      fontSize: constants.font.size.medium,
      lineHeight: constants.font.lineHeight.small,
      color: colors.NeutralXdark,
    },
    body4: {
      fontFamily: constants.font.family.primary,
      fontWeight: constants.font.weight.regular,
      fontSize: constants.font.size.medium,
      lineHeight: constants.font.lineHeight.small,
      textDecorationLine: constants.font.textDecoration.textDecorationLine,
      color: colors.NeutralXdark,
    },
  },

 

  caption: {
    fontFamily: constants.font.family.primary,
    fontWeight: constants.font.weight.regular,
    fontSize: constants.font.size.small,
    lineHeight: constants.font.lineHeight.small,
    color: colors.NeutralXdark,
  },
};
