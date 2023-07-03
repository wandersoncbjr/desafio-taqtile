import { BodySecondary } from '../../typography/body/body-secondary';
import { H3 } from '../../typography/headline/h3';
import React from 'react';
import './card-category.css';
import { ContainerCard } from '../card-container/card-container';

interface CardProps {
  image?: string;
  title: string;
  numberOfProperties: number;
}

export function CardCategory({ image, title, numberOfProperties }: CardProps) {
  return (
    <ContainerCard>
      <img src={image} />
      <div className="title-description">
        <H3>{title}</H3>
        <BodySecondary type="regular">{numberOfProperties} Imóveis </BodySecondary>
      </div>
    </ContainerCard>
  );
}
