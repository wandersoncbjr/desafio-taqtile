import { ReactNode } from "react";
import { constants } from "../../../typography";
import { colors } from "../../../typography/colors";

const baseLabelStyle = {
  fontFamily: constants.font.family.primary,
  fontSize: constants.font.size.large,
  lineHeight: constants.font.lineHeight.small,
  color: colors.PrimaryXDark,
};

const labelStyle = {
  label: {
    labelLargeBold: {
      ...baseLabelStyle,
      fontWeight: constants.font.weight.bold,
    },

    labelLargeSemibold: {
      ...baseLabelStyle,
      fontWeight: constants.font.weight.semiBold,
    },

    labelLargeRegular: {
      ...baseLabelStyle,
      fontWeight: constants.font.weight.regular,
    },

    largeLabel: {
      ...baseLabelStyle,
      fontWeight: constants.font.weight.regular,
      fontSize: constants.font.size.medium,
      color: colors.Neutral,
    },
  },
};

interface labelProps {
  type?: "bold" | "semiBold" | "regular";
  children?: ReactNode;
}

export function Label({ type, children }: labelProps) {
  let labelTypography;

  switch (type) {
    case "bold":
      labelTypography = labelStyle.label.labelLargeBold;
      break;
    case "regular":
      labelTypography = labelStyle.label.labelLargeRegular;
      break;
    case "semiBold":
      labelTypography = labelStyle.label.labelLargeSemibold;
      break;

    default:
      labelTypography = labelStyle.label.largeLabel;
      break;
  }
  return <p style={labelTypography}>{children}</p>;
}
