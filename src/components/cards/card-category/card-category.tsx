import { BodySecondary } from '../../typography/body/body-secondary';
import { H3 } from '../../typography/headline/h3';
import React from 'react';
import './card-category.css';
import { ContainerCard } from '../card-container/card-container';

interface CardProps {
  image?: React.ReactNode;
  title: string;
  description: string;
}

export function CardCategory({ image, title, description }: CardProps) {
  return (
    <ContainerCard>
      {image}
      <div className="title-description">
        <H3>{title}</H3>
        <BodySecondary type="regular">{description}</BodySecondary>
      </div>
    </ContainerCard>
  );
}
