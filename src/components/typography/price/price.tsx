import { ReactNode } from "react";
import { constants } from "../../../typography";
import { colors } from "../../../typography/colors";

const basePriceStyle = {
  fontFamily: constants.font.family.primary,
  fontWeight: constants.font.weight.bold,
  lineHeight: constants.font.lineHeight.small,
  color: colors.NeutralXdark,
};

const stylePrice = {
  price: {
    bigPrice: {
      ...basePriceStyle,
      fontSize: constants.font.size.xxxLarge,
    },
    mediumPrice: {
      ...basePriceStyle,
      fontSize: constants.font.size.xxLarge,
    },
    smallPrice: {
      ...basePriceStyle,
      fontWeight: constants.font.weight.regular,
      fontSize: constants.font.size.medium,
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
