import { Heading4 } from '../typography/headline/h4';
import './index.css';
import React from 'react';

interface PropsItemsCard {
  icon: React.ReactNode;
  title: string;
}

export function ItemsCard({ icon, title }: PropsItemsCard) {
  return (
    <div className="container-card">
      <div>{icon}</div>
      <div>{<Heading4>{title}</Heading4>}</div>
    </div>
  );
}
