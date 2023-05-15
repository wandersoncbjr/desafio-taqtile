import { ReactNode, useState } from "react";
import { constantsButton } from ".";
import { constants } from "../../typography";
import { colors } from "../../typography/colors";

const stylesButton = {
  minWidth: constantsButton.minWidth,
  fontFamily: constants.font.family.primary,
  fontWeight: constantsButton.weight,
  borderRadius: constants.font.radius,
  cursor: constantsButton.cursor,
};
interface ButtonProps {
  type?: "defaultCompact" | "disableCompact" | "disableDefault";
  variant?: "primary" | "secondary" | "CTA";
  icon?: React.ReactNode;
  children?: ReactNode;
  onClick?: () => void;
}

export function ButtonPrimary({
  type,
  variant,
  children,
  icon,
  onClick,
}: ButtonProps) {
  const [hoveractive, setHoveractive] = useState(false);

  const mouseEnter = () => {
    setHoveractive(true);
  };

  const mouseLeave = () => {
    setHoveractive(false);
  };

  const styles = {
    ...stylesButton,
    backgroundColor:
      variant === "primary"
        ? type === "disableCompact" || type === "disableDefault"
          ? colors.NeutralLight
          : colors.PrimaryXDark
        : variant === "CTA"
        ? colors.CTA
        : variant === "secondary"
        ? colors.Neutral
        : colors.PrimaryXDark,
    boxShadow: hoveractive ? constantsButton.boxShadow : "none",
    height:
      type === "defaultCompact" || type === "disableCompact"
        ? constantsButton.defaultCompactHeight
        : constantsButton.defaultHeight,
    border:
      variant === "secondary" ? `  2px solid ${colors.Accessory1}` : "none",
    color: variant === "secondary" ? colors.Accessory1 : colors.Neutral,
  };
  return (
    <button
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
      onClick={onClick}
      style={styles}
      disabled={
        type === "disableCompact" || type === "disableDefault" ? true : false
      }
    >
      {children}
      {!!icon && <span>{icon}</span>}
    </button>
  );
}
