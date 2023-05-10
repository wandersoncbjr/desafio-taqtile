import { ReactNode } from "react";
import { constants } from "../../../typography";
import { colors } from "../../../typography/colors";


const h2Style = {
  fontFamily: constants.font.family.primary,
  fontWeight: constants.font.weight.regular,
  fontSize: constants.font.size.xxLarge,
  lineHeight: constants.font.lineHeight.small,
  color: colors.PrimaryDark,
}

export function Heading2({ children }: { children: ReactNode }) {
  return <h2 style={h2Style}>{children}</h2>;
}
