import { ReactNode } from 'react';
import { constants } from '../../../typography';
import { colors } from '../../../typography/colors';

interface BodyProps {
  color?: 'neutral' | 'dark';
  children: ReactNode;
}

const bodyStyle = {
  fontFamily: constants.font.family.primary,
  fontWeight: constants.font.weight.regular,
  fontSize: constants.font.size.large,
  lineHeight: constants.font.lineHeight.small,
  margin: 0,
};

export function Body1({ children, color }: BodyProps) {
  const styles = {
    ...bodyStyle,
    color: color === 'neutral' ? colors.Neutral : colors.NeutralXdark,
  };
  return <p style={styles}>{children}</p>;
}
