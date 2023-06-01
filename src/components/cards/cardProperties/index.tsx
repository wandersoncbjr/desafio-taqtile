import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faToilet, faRulerCombined } from '@fortawesome/free-solid-svg-icons';
import { ContainerCard } from '../containerCard';
import { colors } from '../../../typography/colors';
import { Price } from '../../typography/price/price';
import { BodySecondary } from '../../typography/body/body2';
import { Caption } from '../../typography/caption/caption';
import './index.css';
import { Divider } from '../divider';
import { formatPrice } from '../../../price-formatter';

interface DataProps {
  category: string;
  detail: string;
}

interface ContainerProps {
  img?: React.ReactNode;
  price: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  data?: DataProps[];
}

export function CardProperties({ img, price, title, description, icon, data }: ContainerProps) {
  const renderIcon = (category: string): React.ReactNode => {
    const categoryIconMapper: Record<string, React.ReactNode> = {
      bathroom: <FontAwesomeIcon color={colors.PrimaryDark} icon={faToilet} />,
      room: <FontAwesomeIcon color={colors.PrimaryDark} icon={faBed} />,
      'square-meter': <FontAwesomeIcon color={colors.PrimaryDark} icon={faRulerCombined} />,
    };

    return categoryIconMapper[category];
  };
  const formattedPrice = formatPrice(price);
  return (
    <ContainerCard>
      {img}
      <div className="container-content">
        <div className="container-price-icon">
          <Price type="medium">{`R$${formattedPrice}`}</Price>
          {icon}
        </div>
        <BodySecondary type="bold">{title}</BodySecondary>
        <Caption color="neutralXDark">{description}</Caption>
      </div>
      <Divider />
      <div className="card-icons">
        {data &&
          data.map((item, index) => (
            <div className="card-icon" key={index}>
              {renderIcon(item.category)}
              <Caption color="neutralXDark">{item.detail}</Caption>
            </div>
          ))}
      </div>
    </ContainerCard>
  );
}
