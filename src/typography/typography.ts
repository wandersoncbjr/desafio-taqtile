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
  display: {
    fontFamily: constants.font.family.primary,
    fontWeight: constants.font.weight.bold,
    fontSize: constants.font.size.xxxxLarge,
    lineHeight: constants.font.lineHeight.large,
    color: colors.PrimaryDark,
  },
  H1: {
    fontFamily: constants.font.family.primary,
    fontWeight: constants.font.weight.bold,
    fontSize: constants.font.size.xxxLarge,
    lineHeight: constants.font.lineHeight.medium,
    color: colors.PrimaryDark,
  },
  H2: {
    fontFamily: constants.font.family.primary,
    fontWeight: constants.font.weight.regular,
    fontSize: constants.font.size.xxLarge,
    lineHeight: constants.font.lineHeight.small,
    color: colors.PrimaryDark,
  },
  H3: {
    fontFamily: constants.font.family.primary,
    fontWeight: constants.font.weight.regular,
    fontSize: constants.font.size.xLarge,
    lineHeight: constants.font.lineHeight.small,
    color: colors.NeutralXdark,
  },
  H4: {
    fontFamily: constants.font.family.primary,
    fontWeight: constants.font.weight.semiBold,
    fontSize: constants.font.size.medium,
    lineHeight: constants.font.lineHeight.small,
    color: colors.PrimaryDark,
  },
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

  details: {
    fontFamily: constants.font.family.primary,
    fontWeight: constants.font.weight.regular,
    fontSize: constants.font.size.medium,
    lineHeight: constants.font.lineHeight.small,
    color: colors.NeutralXdark,
  },

  label: {
    labelLargeBold: {
      fontFamily: constants.font.family.primary,
      fontWeight: constants.font.weight.bold,
      fontSize: constants.font.size.large,
      lineHeight: constants.font.lineHeight.small,
      color: colors.PrimaryXDark,
    },

    labelLargeSemibold: {
      fontFamily: constants.font.family.primary,
      fontWeight: constants.font.weight.semiBold,
      fontSize: constants.font.size.large,
      lineHeight: constants.font.lineHeight.small,
      color: colors.PrimaryXDark,
    },
    labelLargeRegular: {
      fontFamily: constants.font.family.primary,
      fontWeight: constants.font.weight.regular,
      fontSize: constants.font.size.large,
      lineHeight: constants.font.lineHeight.small,
      color: colors.PrimaryXDark,
    },
    largeLabel: {
      fontFamily: constants.font.family.primary,
      fontWeight: constants.font.weight.regular,
      fontSize: constants.font.size.medium,
      lineHeight: constants.font.lineHeight.small,
      color: colors.Neutral,
    },
  },

  caption: {
    fontFamily: constants.font.family.primary,
    fontWeight: constants.font.weight.regular,
    fontSize: constants.font.size.small,
    lineHeight: constants.font.lineHeight.small,
    color: colors.NeutralXdark,
  },

  price: {
    bigPrice: {
      fontFamily: constants.font.family.primary,
      fontWeight: constants.font.weight.bold,
      fontSize: constants.font.size.xxxLarge,
      lineHeight: constants.font.lineHeight.large,
      color: colors.NeutralXdark,
    },

    mediumPrice: {
      fontFamily: constants.font.family.primary,
      fontWeight: constants.font.weight.bold,
      fontSize: constants.font.size.xxLarge,
      lineHeight: constants.font.lineHeight.small,
      color: colors.NeutralXdark,
    },

    smallPrice: {
      fontFamily: constants.font.family.primary,
      fontWeight: constants.font.weight.regular,
      fontSize: constants.font.size.medium,
      lineHeight: constants.font.lineHeight.small,
      color: colors.NeutralXdark,
    },
  },
};
