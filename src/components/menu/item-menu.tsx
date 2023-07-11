import { colors } from '../../typography/colors';
import { Label } from '../typography/label/label';
import { useEffect, useState } from 'react';
import './menu.css';
import { useLocation, Link } from 'react-router-dom';

interface ItemProps {
  title: string;
  redirect: string;
}

export function ItemMenu({ title, redirect }: ItemProps) {
  const [isCurrentRoute, setCurrentRoute] = useState(false);
  const [hover, setHover] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === redirect) {
      setCurrentRoute(true);
    } else {
      setCurrentRoute(false);
    }
  }, [location.pathname]);

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
