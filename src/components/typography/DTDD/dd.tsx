import { ReactNode } from "react";
import { constants } from "../../../typography";
import { colors } from "../../../typography/colors";

const ddStyle = {
  fontFamily: constants.font.family.primary,
  fontWeight: constants.font.weight.regular,
  fontSize: constants.font.size.medium,
  lineHeight: constants.font.lineHeight.small,
  color: colors.NeutralXdark,
};

function Dd({ children }: { children: ReactNode }) {
  return <dd style={ddStyle}>{children}</dd>;
}
export default Dd;
