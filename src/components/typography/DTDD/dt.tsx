import { ReactNode } from "react";
import { constants } from "../../../typography";
import { colors } from "../../../typography/colors";

const dtStyle = {
  fontFamily: constants.font.family.primary,
  fontWeight: constants.font.weight.regular,
  fontSize: constants.font.size.medium,
  lineHeight: constants.font.lineHeight.small,
  color: colors.NeutralXdark,
};

export function DT({ children }: { children: ReactNode }) {
  return <dt style={dtStyle}>{children}</dt>;
}
