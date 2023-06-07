import './carousel.css';
import React, { ReactNode } from 'react';

interface CarouselProps {
  items: ReactNode[];
}

export function Carrousel({ items }: CarouselProps) {
  return (
    <div className="carrossel">
      <div className="carrossel-container">
        {items.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </div>
    </div>
  );
}
