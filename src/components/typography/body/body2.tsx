import { constants } from "../../../typography";
import { ReactNode } from "react";
import { colors } from "../../../typography/colors";

const baseTypography = {
  fontFamily: constants.font.family.primary,
  fontSize: constants.font.size.medium,
  lineHeight: constants.font.lineHeight.small,
  color: colors.NeutralXdark,
};

const bodyStyle = {
  bodyRegular: {
    ...baseTypography,
    fontWeight: constants.font.weight.regular,
  },
  bodyBold: {
    ...baseTypography,
    fontWeight: constants.font.weight.bold,
  },
  bodyScratched: {
    ...baseTypography,
    fontWeight: constants.font.weight.regular,
    textDecorationLine: constants.font.textDecoration.textDecorationLine,
  },
};

interface BodyProps {
  type?: "regular" | "bold" | "scratched";
  children?: ReactNode;
}

export function Body2({ type = "regular", children }: BodyProps) {
  let bodyTypography;

  switch (type) {
    case "bold":
      bodyTypography = bodyTypography = bodyStyle.bodyBold;
      break;
    case "regular":
      bodyTypography = bodyTypography = bodyStyle.bodyRegular;
      break;
    case "scratched":
      bodyTypography = bodyTypography = bodyStyle.bodyScratched;
      break;

    default:
      bodyTypography = bodyTypography = bodyStyle.bodyRegular;
      break;
  }
  return <p style={bodyTypography}>{children}</p>;
}
