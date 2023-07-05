import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faToilet, faRulerCombined } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { ContainerCard } from '../card-container/card-container';
import { colors } from '../../../typography/colors';
import { Price } from '../../typography/price/price';
import { BodySecondary } from '../../typography/body/body-secondary';
import { Caption } from '../../typography/caption/caption';
import './card-properties.css';
import { Divider } from '../divider/divider';
import { formatPrice } from '../../../price-formatter';

interface DataProps {
  property: string;
  detail: string;
}

interface ContainerProps {
  img?: string;
  price: number;
  title: string;
  description: string;
  data?: DataProps[];
}

const renderIcon = (property: string): React.ReactNode => {
  const categoryIconMapper: Record<string, React.ReactNode> = {
    bathroom: <FontAwesomeIcon color={colors.PrimaryDark} icon={faToilet} />,
    bedrooms: <FontAwesomeIcon color={colors.PrimaryDark} icon={faBed} />,
    'square-meter': <FontAwesomeIcon color={colors.PrimaryDark} icon={faRulerCombined} />,
  };

  return categoryIconMapper[property];
};
export function CardProperties({ img, price, title, description, data }: ContainerProps) {
  const formattedPrice = formatPrice(price);
  return (
    <ContainerCard>
      <img src={img} />
      <div className="container-content">
        <div className="container-price-icon">
          <Price type="medium">{`${formattedPrice}`}</Price>
          <FontAwesomeIcon icon={faHeart} />
        </div>
        <BodySecondary type="bold">{title}</BodySecondary>
        <Caption color="neutralXDark">{description}</Caption>
      </div>
      <Divider />
      <div className="card-icons">
        {data &&
          data.map((item, index) => (
            <div className="card-icon" key={index}>
              {renderIcon(item.property)}
              <Caption color="neutralXDark">{item.detail}</Caption>
            </div>
          ))}
      </div>
    </ContainerCard>
  );
}
