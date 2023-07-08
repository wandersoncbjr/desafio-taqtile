import { colors } from '../../typography/colors';
import { Label } from '../typography/label/label';
import { useState } from 'react';
import './menu.css';
interface ItemProps {
  title: string;
  redirect: string;
}

export function ItemMenu({ title, redirect }: ItemProps) {
  const [hover, setHover] = useState(false);
  return (
    <div style={{ display: 'inline-block', marginInline: hover ? '0' : '0.33px' }} className="container-item">
      <a
        onMouseEnter={() => {
          setHover(true);
        }}
        onMouseLeave={() => setHover(false)}
        href={redirect}
        style={{ textDecoration: 'none', borderBottom: hover ? `5px solid ${colors.secondary}` : 'none' }}
      >
        <Label type={hover ? 'bold' : 'semiBold'}>{title}</Label>
      </a>
    </div>
  );
}
