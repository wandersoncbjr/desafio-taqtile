import React, { useState } from 'react';
import { Button } from '../../button/button';
import { BodySecondary } from '../../typography/body/body2';
import { Caption } from '../../typography/caption/caption';
import { Label } from '../../typography/label/label';
import { Price } from '../../typography/price/price';
import { ContainerCard } from '../containerCard';
import { Divider } from '../divider';
import './index.css';
import { colors } from '../../../typography/colors';
import { constants } from '../../../typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCircleCheck, faHeart as heartRegular } from '@fortawesome/free-regular-svg-icons';
import { faShare, faHeart as heartSolid } from '@fortawesome/free-solid-svg-icons';
import { H3 } from '../../typography/headline/h3';
import { formatPrice } from '../../../price-formatter';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

library.add(heartRegular, heartSolid);

interface BookingPrices {
  pricetotal?: number;
  priceCondominium: number;
  priceIptu?: number;
  priceServiceFee?: number;
  priceGrossRent?: number;
}

interface BookingProps {
  nameUser: string;
  imageUser: React.ReactNode;
  prices: BookingPrices;
  broker: string;
  checkedUser?: boolean;
  type?: 'sell' | 'rent';
}

export function CardBooking({ imageUser, prices, nameUser, broker, type, checkedUser: checked }: BookingProps) {
  const pricetotal = prices.pricetotal && formatPrice(prices.pricetotal);
  const priceCondominium = prices.priceCondominium && formatPrice(prices.priceCondominium);
  const priceIptu = prices.priceIptu && formatPrice(prices.priceIptu);
  const priceServiceFee = prices.priceServiceFee && formatPrice(prices.priceServiceFee);
  const priceGrossRent = prices.priceGrossRent && formatPrice(prices.priceGrossRent);
  const [favorite, setFavorite] = useState(false);
  const handleFavoriteClick = () => {
    setFavorite(!favorite);
  };

  return (
    <ContainerCard marginAll>
      {pricetotal && (
        <div>
          <Price type="big">{pricetotal}</Price>
        </div>
      )}
      <Divider />
      {priceCondominium && (
        <div className="container-price">
          <BodySecondary type="bold">Condomínio</BodySecondary>
          <Price type="small">{priceCondominium}</Price>
        </div>
      )}
      {priceIptu && (
        <div className="container-price">
          <BodySecondary type="bold">IPTU</BodySecondary>
          <Price type="small">{priceIptu}</Price>
        </div>
      )}
      {type === 'sell' && (
        <>
          {priceServiceFee && (
            <div className="container-price">
              <BodySecondary type="bold">Taxa de serviços</BodySecondary>
              <Price type="small">{priceServiceFee}</Price>
            </div>
          )}
          {priceGrossRent && (
            <div className="container-price">
              <BodySecondary type="bold">Aluguel bruto</BodySecondary>
              <Price type="small">{priceGrossRent}</Price>
            </div>
          )}
          <Divider />
          {pricetotal && (
            <div className="container-price">
              <BodySecondary type="bold">Total</BodySecondary>
              <Price type="small">{pricetotal}</Price>
            </div>
          )}
        </>
      )}
      <div
        className="container-user"
        style={{
          border: ` 1px solid ${colors.NeutralLight}`,
          borderRadius: constants.font.SmallRadius,
        }}
      >
        <div style={{ marginLeft: '4px' }}></div>
        {imageUser}
        <div className="name-broker">
          <div className="name-icon">
            <Label type="bold">{nameUser}</Label>
            {checked && <FontAwesomeIcon icon={faCircleCheck} color={colors.FeedbackSuccess} />}
          </div>
          <Caption color="neutralXDark">{broker}</Caption>
        </div>
      </div>
      <div style={{ marginTop: '16px' }}></div>
      <div>
        <Button variant="CTA" compact expanded icon={faWhatsapp}>
          Falar com o corretor
        </Button>
        <div style={{ marginTop: '8px' }}></div>
        <Button compact expanded>
          Agendar visita
        </Button>
        <div className="container-icons">
          <div className="icon-share-favorited">
            <FontAwesomeIcon
              icon={favorite ? heartSolid : heartRegular}
              color={favorite ? 'red' : ''}
              onClick={() => {
                handleFavoriteClick();
              }}
            />
            <H3>{favorite ? 'Favoritado' : 'Favoritar'}</H3>
          </div>
          <div className="icon-share-favorited">
            <FontAwesomeIcon icon={faShare} />
            <H3>Compartilhar</H3>
          </div>
        </div>
      </div>
    </ContainerCard>
  );
}
