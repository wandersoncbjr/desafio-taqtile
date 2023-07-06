import { colors } from '../../typography/colors';
import { Label } from '../typography/label/label';
import { useState } from 'react';

interface ItemProps {
  title: string;
  redirect: string;
}

export function ItemMenu({ title, redirect }: ItemProps) {
  const [hover, setHover] = useState(false);
  return (
    <div style={{ display: 'inline-block', cursor: 'pointer' }}>
      <a
        onMouseEnter={() => {
          setHover(true);
        }}
        onMouseLeave={() => setHover(false)}
        href={redirect}
        style={{ textDecoration: 'none', borderBottom: hover ? `5px solid ${colors.secondaryColor}` : 'none' }}
      >
        <Label type={hover ? 'bold' : 'semiBold'}>{title}</Label>
      </a>
    </div>
  );
}
