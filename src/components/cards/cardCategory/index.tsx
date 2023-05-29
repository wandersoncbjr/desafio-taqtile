import { Body2 } from '../../typography/body/body2';
import { Heading3 } from '../../typography/headline/h3';
import React from 'react';
import './index.css';
import { ContainerCard } from '../containerCard';

interface CardProps {
  image?: React.ReactNode;
  title?: string;
  description?: string;
}

export function CardCategory({ image, title, description }: CardProps) {
  return (
    <ContainerCard>
      {image}
      <div className="title-description">
        <Heading3>{title}</Heading3>
        <Body2 type="regular">{description}</Body2>
      </div>
    </ContainerCard>
  );
}
