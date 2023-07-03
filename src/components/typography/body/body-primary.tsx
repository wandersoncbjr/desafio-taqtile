import { ReactNode } from 'react';
import { constants } from '../../../typography';
import { colors } from '../../../typography/colors';

const bodyStyle = {
  body: {
    fontFamily: constants.font.family.primary,
    fontWeight: constants.font.weight.regular,
    fontSize: constants.font.size.large,
    lineHeight: constants.font.lineHeight.small,
    color: colors.NeutralXdark,
  },
};

export function Body1({ children }: { children: ReactNode }) {
  return <p style={bodyStyle.body}>{children}</p>;
}
