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
  display: constantsButton.display,
  justifyContent: constantsButton.justifyContent,
  alignItems: constantsButton.alignItems,
};

interface ButtonProps {
  compact?: boolean;
  disabled?: boolean;
  variant?: "primary" | "secondary" | "CTA";
  icon?: React.ReactNode;
  children?: ReactNode;
  onClick?: () => void;
}

export function ButtonPrimary({
  compact,
  disabled,
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
        ? disabled
          ? colors.NeutralLight
          : colors.PrimaryXDark
        : variant === "CTA"
        ? colors.CTA
        : variant === "secondary"
        ? colors.Neutral
        : colors.PrimaryXDark,
    boxShadow: hoveractive ? constantsButton.boxShadow : "none",
    height: compact
      ? constantsButton.defaultCompactHeight
      : constantsButton.defaultHeight,
    border: variant === "secondary" ? `2px solid ${colors.Accessory1}` : "none",
    color: variant === "secondary" ? colors.Accessory1 : colors.Neutral,
  };

  return (
    <button
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
      onClick={onClick}
      style={styles}
      disabled={disabled}
    >
      {!!icon && <span style={{ marginRight: "8px" }}>{icon}</span>}
      {children}
    </button>
  );
}
