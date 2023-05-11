import { ReactNode } from "react";
import { constants } from "../../../typography";
import { colors } from "../../../typography/colors";

const captionStyle = {
  fontFamily: constants.font.family.primary,
  fontWeight: constants.font.weight.regular,
  fontSize: constants.font.size.small,
  lineHeight: constants.font.lineHeight.small,
  color: colors.NeutralXdark,
};

export function Caption({ children }: { children: ReactNode }) {
  return <p style={captionStyle}>{children}</p>;
}
