import { ReactNode } from 'react';
import { constants } from '../../../typography';
import { colors } from '../../../typography/colors';

interface CaptionProps {
  color?: 'black' | 'white' | 'neutralXDark';
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
  let textColor;
  if (color === 'black') {
    textColor = colors.NeutralDark;
  } else if (color === 'neutralXDark') {
    textColor = colors.NeutralXdark;
  } else {
    textColor = colors.Neutral;
  }

  return <p style={{ ...captionStyle, color: textColor }}>{children}</p>;
  
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
