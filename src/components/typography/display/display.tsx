import { ReactNode } from "react";
import { constants } from "../../../typography";
import { colors } from "../../../typography/colors";

const displatStyle = {
  fontFamily: constants.font.family.primary,
  fontWeight: constants.font.weight.bold,
  fontSize: constants.font.size.xxxxLarge,
  lineHeight: constants.font.lineHeight.large,
  color: colors.PrimaryDark,
};

export function Display({ children }: { children: ReactNode }) {
  return <p style={displatStyle}>{children}</p>;
}
