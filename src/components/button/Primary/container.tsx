import { ReactNode } from "react";
import { constantsButton } from "..";
import { constants } from "../../../typography";
import { colors } from "../../../typography/colors";

const stylesButton = {
  width: constantsButton.primary.width,
  fontFamily: constants.font.family.primary,
  fontSize: constantsButton.primary.size,
  color: colors.Neutral,
  fontWeight: constantsButton.primary.weight,
  borderRadius: constantsButton.primary.radius,
  border: constantsButton.primary.border,
};
interface buttonProps {
  type?:
    | "default"
    | "defaultCompact"
    | "disableCompact"
    | "disableDefault"
    | "hover";

  children?: ReactNode;
}

export function ButtonCt({ type = "default", children }: buttonProps) {
  const styles = {
    ...stylesButton,
    backgroundColor:
      type === "disableCompact" || type === "disableDefault"
        ? colors.NeutralLight
        : colors.PrimaryXDark,
    height:
      type === "defaultCompact" || type === "disableCompact"
        ? constantsButton.primary.defaultCompactHeight
        : constantsButton.primary.defaultHeight,
    boxShadow: type === "hover" ? constantsButton.primary.boxShadow : "none",
  };

  return <button style={styles}>{children}</button>;
}
