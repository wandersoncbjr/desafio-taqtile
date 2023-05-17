import { ReactNode } from 'react';
import { constants } from '../../../typography';
import { colors } from '../../../typography/colors';

const h3Style = {
  fontFamily: constants.font.family.primary,
  fontWeight: constants.font.weight.regular,
  fontSize: constants.font.size.xLarge,
  lineHeight: constants.font.lineHeight.small,
  color: colors.NeutralXdark,
};

export function Heading3({ children }: { children: ReactNode }) {
  return <h3 style={h3Style}>{children}</h3>;
}
