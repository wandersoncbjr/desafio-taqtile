import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faToilet, faRulerCombined } from '@fortawesome/free-solid-svg-icons';
import { ContainerCard } from '../containerCard';
import { colors } from '../../../typography/colors';
import { Price } from '../../typography/price/price';
import { Body2 } from '../../typography/body/body2';
import { Caption } from '../../typography/caption/caption';
import './index.css';

interface CategoryProps {
  category: string;
  detail: string;
}

interface ContainerProps {
  img?: React.ReactNode;
  price: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  icons?: CategoryProps[];
}

export function CardProperties({ img, price, title, description, icon, icons }: ContainerProps) {
  const renderIcon = (category: string) => {
    if (category === 'bathroom') {
      return <FontAwesomeIcon color={colors.PrimaryDark} icon={faToilet} />;
    } else if (category === 'room') {
      return <FontAwesomeIcon color={colors.PrimaryDark} icon={faBed} />;
    } else if (category === 'square-meter') {
      return <FontAwesomeIcon color={colors.PrimaryDark} icon={faRulerCombined} />;
    } else {
      return null;
    }
  };
  const formattedPrice = String(price.toFixed(2));
  return (
    <ContainerCard>
      {img}
      <div className="container-content">
        <div className="container-price-icon">
          <Price type="medium">{`R$${formattedPrice}`}</Price>
          {icon}
        </div>
        <Body2 type="bold">{title}</Body2>
        <Caption color="Neutral/X-dark">{description}</Caption>
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
              {renderIcon(item.category)}
              <Caption color="Neutral/X-dark">{item.detail}</Caption>
            </div>
          ))}
      </div>
    </ContainerCard>
  );
}
