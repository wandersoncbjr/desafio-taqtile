import { Colors } from "./colors";

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
      xxxxLarge: {
        option1: "40px",
        option2: "60px",
      },
      xxxLarge: {
        option1: "36px",
        option2: "54px",
      },
      xxLarge: {
        option1: "28px",
        option2: "42px",
      },
      xLarge: {
        option1: "18px",
        option2: "27px",
      },
      large: {
        option1: "16px",
        option2: "24px",
      },
      medium: {
        option1: "14px",
        option2: "21px",
      },
      small: {
        option1: "12px",
        option2: "18px",
      },
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
    fontSize: constants.font.size.xxxxLarge.option1,
    lineHeight: constants.font.lineHeight.large,
    color: Colors.PrimaryDark,
  },
  H1: {
    fontFamily: constants.font.family.primary,
    fontWeight: constants.font.weight.bold,
    fontSize: constants.font.size.xxxLarge.option2,
    lineHeight: constants.font.lineHeight.medium,
    color: Colors.PrimaryDark,
  },
  H2: {
    fontFamily: constants.font.family.primary,
    fontWeight: constants.font.weight.regular,
    fontSize: constants.font.size.xxLarge.option1,
    lineHeight: constants.font.lineHeight.small,
    color: Colors.PrimaryDark,
  },
  H3: {
    fontFamily: constants.font.family.primary,
    fontWeight: constants.font.weight.regular,
    fontSize: constants.font.size.xLarge.option1,
    lineHeight: constants.font.lineHeight.small,
    color: Colors.NeutralXdark,
  },
  H4: {
    fontFamily: constants.font.family.primary,
    fontWeight: constants.font.weight.semiBold,
    fontSize: constants.font.size.medium.option1,
    lineHeight: constants.font.lineHeight.small,
    color: Colors.PrimaryDark,
  },
  body: {
    body1: {
      fontFamily: constants.font.family.primary,
      fontWeight: constants.font.weight.regular,
      fontSize: constants.font.size.large.option2,
      lineHeight: constants.font.lineHeight.small,
      color: Colors.NeutralXdark,
    },

    body2: {
      fontFamily: constants.font.family.primary,
      fontWeight: constants.font.weight.regular,
      fontSize: constants.font.size.medium.option1,
      lineHeight: constants.font.lineHeight.small,
      color: Colors.NeutralXdark,
    },
    body3: {
      fontFamily: constants.font.family.primary,
      fontWeight: constants.font.weight.bold,
      fontSize: constants.font.size.medium.option1,
      lineHeight: constants.font.lineHeight.small,
      color: Colors.NeutralXdark,
    },
    body4: {
      fontFamily: constants.font.family.primary,
      fontWeight: constants.font.weight.regular,
      fontSize: constants.font.size.medium.option1,
      lineHeight: constants.font.lineHeight.small,
      textDecorationLine: constants.font.textDecoration.textDecorationLine,
      color: Colors.NeutralXdark,
    },
  },

  details: {
    fontFamily: constants.font.family.primary,
    fontWeight: constants.font.weight.regular,
    fontSize: constants.font.size.medium.option1,
    lineHeight: constants.font.lineHeight.small,
    color: Colors.NeutralXdark,
  },

  label: {
    labelLargeBold: {
      fontFamily: constants.font.family.primary,
      fontWeight: constants.font.weight.bold,
      fontSize: constants.font.size.large.option1,
      lineHeight: constants.font.lineHeight.small,
      color: Colors.PrimaryXDark,
    },

    labelLargeSemibold: {
      fontFamily: constants.font.family.primary,
      fontWeight: constants.font.weight.semiBold,
      fontSize: constants.font.size.large.option1,
      lineHeight: constants.font.lineHeight.small,
      color: Colors.PrimaryXDark,
    },
    labelLargeRegular: {
      fontFamily: constants.font.family.primary,
      fontWeight: constants.font.weight.regular,
      fontSize: constants.font.size.large.option1,
      lineHeight: constants.font.lineHeight.small,
      color: Colors.PrimaryXDark,
    },
    largeLabel: {
      fontFamily: constants.font.family.primary,
      fontWeight: constants.font.weight.regular,
      fontSize: constants.font.size.medium.option1,
      lineHeight: constants.font.lineHeight.small,
      color: Colors.Neutral,
    },
  },

  caption: {
    fontFamily: constants.font.family.primary,
    fontWeight: constants.font.weight.regular,
    fontSize: constants.font.size.small.option1,
    lineHeight: constants.font.lineHeight.small,
    color: Colors.NeutralXdark,
  },

  price: {
    bigPrice: {
      fontFamily: constants.font.family.primary,
      fontWeight: constants.font.weight.bold,
      fontSize: constants.font.size.xxxLarge.option1,
      lineHeight: constants.font.lineHeight.large,
      color: Colors.NeutralXdark,
    },

    mediumPrice: {
      fontFamily: constants.font.family.primary,
      fontWeight: constants.font.weight.bold,
      fontSize: constants.font.size.xxLarge.option1,
      lineHeight: constants.font.lineHeight.small,
      color: Colors.NeutralXdark,
    },

    smallPrice: {
      fontFamily: constants.font.family.primary,
      fontWeight: constants.font.weight.regular,
      fontSize: constants.font.size.medium.option1,
      lineHeight: constants.font.lineHeight.small,
      color: Colors.NeutralXdark,
    },
  },
};
