import { ReactNode } from 'react';
import { constants } from '../../../typography';
import { colors } from '../../../typography/colors';

const baseLabelStyle = {
  fontFamily: constants.font.family.primary,
  fontSize: constants.font.size.large,
  lineHeight: constants.font.lineHeight.small,
};

interface labelProps {
  type?: 'bold' | 'semiBold' | 'regular' | 'neutral';
  children?: ReactNode;
}

export function Label({ type = 'regular', children }: labelProps) {
  const style = {
    ...baseLabelStyle,
    fontWeight:
      type === 'bold'
        ? constants.font.weight.bold
        : type === 'semiBold'
        ? constants.font.weight.semiBold
        : type === 'neutral'
        ? constants.font.weight.regular
        : constants.font.weight.regular,
    fontSize: type === 'neutral' ? constants.font.size.medium : constants.font.size.large,
    color: type === 'neutral' ? colors.Neutral : type === 'regular' ? colors.Accessory1 : colors.PrimaryXDark,
  };

  return <label style={style}>{children}</label>;
}
