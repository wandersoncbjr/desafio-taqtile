import './carousel.css';
import React, { ReactNode } from 'react';

interface CarouselProps {
  children: ReactNode[];
}

export function Carrousel({ children }: CarouselProps) {
  console.log(children);
  return (
    <div className="carrossel">
      <div className="carrossel-container">
        {children.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </div>
    </div>
  );
}
