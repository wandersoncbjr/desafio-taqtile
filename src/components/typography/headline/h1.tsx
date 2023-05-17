import { ReactNode } from 'react';
import { constants } from '../../../typography';
import { colors } from '../../../typography/colors';

const h1Style = {
  fontFamily: constants.font.family.primary,
  fontWeight: constants.font.weight.bold,
  fontSize: constants.font.size.xxxLarge,
  lineHeight: constants.font.lineHeight.medium,
  color: colors.PrimaryDark,
};

export function Heading1({ children }: { children: ReactNode }) {
  return <h1 style={h1Style}>{children}</h1>;
}
