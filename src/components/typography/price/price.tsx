import { ReactNode } from "react";
import { constants } from "../../../typography";
import { colors } from "../../../typography/colors";

const stylePrice = {
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

interface PriceProps {
  type?: "big" | "medium" | "small";
  children?: ReactNode;
}

export function Price({ type = "small", children }: PriceProps) {
  let priceTypography: typeof stylePrice.price.bigPrice;

  if (type === "big") {
    priceTypography = stylePrice.price.bigPrice;
  } else if (type === "medium") {
    priceTypography = stylePrice.price.mediumPrice;
  } else {
    priceTypography = stylePrice.price.smallPrice;
  }

  return <p style={priceTypography}>{children}</p>;
}
