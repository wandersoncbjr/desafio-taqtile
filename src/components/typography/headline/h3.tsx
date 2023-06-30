import { ReactNode } from 'react';
import { constants } from '../../../typography';
import { colors } from '../../../typography/colors';

const h3Style = {
  fontFamily: constants.font.family.primary,
  fontWeight: constants.font.weight.regular,
  fontSize: constants.font.size.xLarge,
  lineHeight: constants.font.lineHeight.small,

  margin: 0,
};

interface H3Props {
  color?: 'neutral';
  children: ReactNode;
}

export function H3({ color, children }: H3Props) {
  const style = {
    ...h3Style,
    color: color == 'neutral' ? colors.Neutral : colors.NeutralXdark,
  };
  return <h3 style={style}>{children}</h3>;
}
