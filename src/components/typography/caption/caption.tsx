import { ReactNode } from 'react';
import { constants } from '../../../typography';
import { colors } from '../../../typography/colors';

interface PropsCaption {
  color: 'black' | 'white';
  children: ReactNode;
}

export function Caption({ children, color }: PropsCaption) {
  const captionStyle = {
    fontFamily: constants.font.family.primary,
    fontWeight: constants.font.weight.regular,
    fontSize: constants.font.size.small,
    lineHeight: constants.font.lineHeight.small,
    color: color === 'black' ? colors.NeutralDark : colors.Neutral,
  };
  return <p style={captionStyle}>{children}</p>;
}
