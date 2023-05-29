import { colors } from '../../typography/colors';
import { Caption } from '../typography/caption/caption';
import './index.css';
import { ReactNode, useState } from 'react';

export interface BadgeProps {
  title: string;
  icon: ReactNode;
  onClick: () => void;
  selected: boolean;
}

export function Badge({ title, icon, onClick, selected }: PropsBadges) {
  const [hover, setHover] = useState(false);
  const mouseEnter = () => {
    setHover(true);
  };
  const mouseLeave = () => {
    setHover(false);
  };
  const handleClick = () => {
    onClick();
  };

  const badgesStyle = {
    border: selected || hover ? 'none' : `1px solid ${colors.NeutralMedium}`,
    backgroundColor: selected ? colors.CTA : hover ? '#29D6E733' : colors.Neutral,
  };

  return (
    <div
      className="container-badges"
      onClick={handleClick}
      style={badgesStyle}
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
    >
      <div>{icon}</div>
      <Caption color={selected ? 'white' : 'black'}> {title}</Caption>
    </div>
  );
}
