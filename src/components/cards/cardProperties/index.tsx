import React from 'react';
import { Body2 } from '../../typography/body/body2';
import { Caption } from '../../typography/caption/caption';
import { Price } from '../../typography/price/price';
import { ContainerCard } from '../containerCard';
import './index.css';

interface ContainerProps {
  img?: React.ReactNode;
  price: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  icons?: { icon: React.ReactNode; text: string }[];
}

export function CardProperties({ img, price, title, description, icon, icons }: ContainerProps) {
  return (
    <ContainerCard>
      {img}
      <div className="container-content">
        <div className="container-price-icon">
          <Price type="medium">{price}</Price>
          {icon}
        </div>
        <Body2 type="bold">{title}</Body2>
        <Caption>{description}</Caption>
      </div>
      <hr
        style={{
          backgroundColor: '#F0EFFB',
          height: '1px',
          margin: '1px 12px',
          border: 'none',
        }}
      />

      <div className="card-icons">
        {icons &&
          icons.map((item, index) => (
            <div className="card-icon" key={index}>
              {item.icon}
              <div>{item.text}</div>
            </div>
          ))}
      </div>
    </ContainerCard>
  );
}
