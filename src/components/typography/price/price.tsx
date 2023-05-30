import { ReactNode } from 'react';
import { constants } from '../../../typography';
import { colors } from '../../../typography/colors';

const basePriceStyle = {
  fontFamily: constants.font.family.primary,
  lineHeight: constants.font.lineHeight.small,
  margin: 0,
};

interface PriceProps {
  type?: 'big' | 'medium' | 'small';
  children?: ReactNode;
}

export function Price({ type = 'small', children }: PriceProps) {
  const style = {
    ...basePriceStyle,
    fontSize:
      type === 'big'
        ? constants.font.size.xxxLarge
        : type === 'medium'
        ? constants.font.size.xxLarge
        : constants.font.size.medium,
    fontWeight: type === 'small' ? constants.font.weight.regular : constants.font.weight.bold,
    color: type === 'medium' ? colors.Accessory2 : colors.NeutralXdark,
  };

  return <p style={style}>{children}</p>;
}
