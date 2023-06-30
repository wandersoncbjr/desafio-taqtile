import { constants } from '../../../typography';
import { ReactNode } from 'react';
import { colors } from '../../../typography/colors';

const baseTypography = {
  fontFamily: constants.font.family.primary,
  fontSize: constants.font.size.medium,
  lineHeight: constants.font.lineHeight.small,
  color: colors.NeutralXdark,
  margin: 0,
};

interface BodyProps {
  type?: 'regular' | 'bold' | 'scratched';
  children?: ReactNode;
  color?: 'NeutralXdark' | 'Neutral';
}

export function BodySecondary({ type = 'regular', children, color }: BodyProps) {
  const style = {
    ...baseTypography,
    color: color === 'Neutral' ? colors.Neutral : colors.NeutralXdark,
    fontWeight: type === 'bold' ? constants.font.weight.bold : constants.font.weight.regular,
    textDecorationLine: type === 'scratched' ? constants.font.textDecoration.textDecorationLine : undefined,
  };

  return <p style={style}>{children}</p>;
}
