import React, { ReactNode, useState } from 'react';
import { constants } from '../../typography';
import { colors } from '../../typography/colors';

export const constantsButton = {
  defaultCompactHeight: '40px',
  defaultHeight: '48px',
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
};

const stylesButton = {
  padding: '16px',
  minWidth: '143px',
  fontFamily: constants.font.family.primary,
  fontWeight: constants.font.weight.bold,
  borderRadius: constants.font.radius,
  cursor: 'pointer',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

interface ButtonProps {
  compact?: boolean;
  disabled?: boolean;
  variant?: 'primary' | 'secondary' | 'CTA';
  icon?: React.ReactNode;
  children?: ReactNode;
  onClick?: () => void;
}

export function ButtonPrimary({ compact, disabled, variant, children, icon, onClick }: ButtonProps) {
  const [hoveractive, setHoveractive] = useState(false);

  const mouseEnter = () => {
    setHoveractive(true);
  };

  const mouseLeave = () => {
    setHoveractive(false);
  };

  let backgroundColor, border, color;

  if (variant === 'primary') {
    backgroundColor = disabled ? colors.NeutralLight : colors.PrimaryXDark;
  } else if (variant === 'CTA') {
    backgroundColor = colors.CTA;
  } else if (variant === 'secondary') {
    backgroundColor = colors.Neutral;
    border = `2px solid ${colors.Accessory1}`;
    color = colors.Accessory1;
  } else {
    backgroundColor = colors.PrimaryXDark;
  }
  const boxShadow = hoveractive ? constantsButton.boxShadow : 'none';
  const height = compact ? constantsButton.defaultCompactHeight : constantsButton.defaultHeight;
  border = variant === 'secondary' ? `2px solid ${colors.Accessory1}` : 'none';
  color = variant === 'secondary' ? colors.Accessory1 : colors.Neutral;

  const styles = {
    ...stylesButton,
    backgroundColor,
    boxShadow,
    height,
    border,
    color,
  };

  return (
    <button onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} onClick={onClick} style={styles} disabled={disabled}>
      {!!icon && <span style={{ marginRight: '8px' }}>{icon}</span>}
      {children}
    </button>
  );
}
