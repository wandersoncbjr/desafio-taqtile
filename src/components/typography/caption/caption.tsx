import { ReactNode } from 'react';
import { constants } from '../../../typography';
import { colors } from '../../../typography/colors';

interface CaptionProps {
  color: 'black' | 'white';
  children: ReactNode;
}

const captionStyle = {
  fontFamily: constants.font.family.primary,
  fontWeight: constants.font.weight.regular,
  fontSize: constants.font.size.small,
  lineHeight: constants.font.lineHeight.small,
};

export function Caption({ children, color }: CaptionProps) {
  return (
    <p
      style={{
        ...captionStyle,
        color: color === 'black' ? colors.NeutralDark : colors.Neutral,
      }}
    >
      {children}
    </p>
  );
}
