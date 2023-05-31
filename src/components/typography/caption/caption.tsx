import { ReactNode } from 'react';
import { constants } from '../../../typography';
import { colors } from '../../../typography/colors';

interface CaptionProps {
  color?: 'black' | 'white' | 'Neutral/X-dark';
  children: ReactNode;
}

const captionStyle = {
  fontFamily: constants.font.family.primary,
  fontWeight: constants.font.weight.regular,
  fontSize: constants.font.size.small,
  lineHeight: constants.font.lineHeight.small,
  margin: 0,
};

export function Caption({ children, color }: CaptionProps) {
  return (
    <p
      style={{
        ...captionStyle,
        color:
          color === 'black' ? colors.NeutralDark : color === 'Neutral/X-dark' ? colors.NeutralXdark : colors.Neutral,
      }}
    >
      {children}
    </p>
  );
}
