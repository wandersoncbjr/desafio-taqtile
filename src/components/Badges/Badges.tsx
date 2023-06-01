import { colors } from '../../typography/colors';
import { Caption } from '../typography/caption/caption';
import './index.css';
import { ReactNode, useState } from 'react';

export interface BadgeProps {
  title?: string;
  icon?: ReactNode;
  onClick: () => void;
  selected: boolean;
}

export function Badge({ title, icon, onClick, selected }: BadgeProps) {
  const [hover, setHover] = useState(false);
  const handleMouseEnter = () => {
    setHover(true);
  };
  const handleMouseLeave = () => {
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
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="icon">{icon}</div>
      <div className="image">
        <Caption color={selected ? 'white' : 'black'}> {title}</Caption>
      </div>
    </div>
  );
}
