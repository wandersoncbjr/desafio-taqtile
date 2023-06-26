import React from 'react';
import { constants } from '../../../typography';
import { colors } from '../../../typography/colors';

interface DisplayProps {
  children: React.ReactNode;
  color?: keyof typeof colors;
}

export function Display({ children, color }: DisplayProps) {
  return (
    <p
      style={{
        fontFamily: constants.font.family.primary,
        fontWeight: constants.font.weight.bold,
        fontSize: constants.font.size.xxxxLarge,
        lineHeight: constants.font.lineHeight.large,
        margin: 0,
        color: color ? colors[color] : colors.PrimaryDark,
      }}
    >
      {children}
    </p>
  );
}
