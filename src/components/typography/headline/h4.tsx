import { ReactNode } from 'react';
import { constants } from '../../../typography';
import { colors } from '../../../typography/colors';

const h4Style = {
  fontFamily: constants.font.family.primary,
  fontWeight: constants.font.weight.semiBold,
  fontSize: constants.font.size.medium,
  lineHeight: constants.font.lineHeight.small,
  color: colors.PrimaryDark,
  margin: 0,
};

export function Heading4({ children }: { children: ReactNode }) {
  return <h4 style={h4Style}>{children}</h4>;
}
