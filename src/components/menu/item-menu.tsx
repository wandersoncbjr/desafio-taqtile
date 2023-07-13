import { colors } from '../../typography/colors';
import { Label } from '../typography/label/label';
import { useState } from 'react';
import './menu.css';
import { useLocation, Link } from 'react-router-dom';

interface ItemProps {
  title: string;
  redirect: string;
}

export function ItemMenu({ title, redirect }: ItemProps) {
  const [hover, setHover] = useState(false);
  const location = useLocation();
  const isCurrentRoute = location.pathname === redirect;

  return (
    <div style={{ display: 'inline-block', marginInline: hover ? '0' : '0.32px' }} className="container-item">
      <Link
        to={redirect}
        onMouseEnter={() => {
          setHover(true);
        }}
        onMouseLeave={() => setHover(false)}
        style={{ textDecoration: 'none', borderBottom: isCurrentRoute ? `5px solid ${colors.secondary}` : 'none' }}
      >
        <Label type={hover ? 'bold' : 'semiBold'}>{title}</Label>
      </Link>
    </div>
  );
}
