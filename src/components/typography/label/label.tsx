import { ReactNode } from "react";
import { constants, typography } from "../../../typography";
import { colors } from "../../../typography/colors";

const labelStyle = {
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
};

interface labelProps {
  type?: "regular" | "bold" | "semiBold";
  children?: ReactNode;
}

export function Label({ children, weight }: LabelProps) {
  const style = labelStyle.label;
  return <label style={style}>{children}</label>;
}
