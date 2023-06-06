import React, { useState } from 'react';
import { ButtonPrimary } from '../../button/button';
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

interface DataProps {
  pricetotal?: number;
  priceCondominium: number;
  priceIptu?: number;
  priceServiceFee?: number;
  priceGrossRent?: number;
}

interface BookingProps {
  nameUser: string;
  imageUser: React.ReactNode;
  prices: DataProps;
  broker: string;
  checked: boolean;
  type?: 'sell' | 'rent';
}

export function CardBooking({ imageUser, prices, nameUser, broker, type, checked }: BookingProps) {
  const [favorite, setFavorite] = useState<boolean>(false);
  const pricetotal = formatPrice(prices.pricetotal || 0);
  const priceCondominium = formatPrice(prices.priceCondominium || 0);
  const priceIptu = formatPrice(prices.priceIptu || 0);
  const priceServiceFee = formatPrice(prices.priceServiceFee || 0);
  const priceGrossRent = formatPrice(prices.priceGrossRent || 0);
  return (
    <ContainerCard>
      <div style={{ marginLeft: '16px' }}>
        <Price type="big">{pricetotal}</Price>
      </div>
      <Divider />
      <div className="container-price">
        <BodySecondary type="bold">Condomínio</BodySecondary>
        <Price type="small">{priceCondominium}</Price>
      </div>
      <div className="container-price">
        <BodySecondary type="bold">IPTU</BodySecondary>
        <Price type="small">{priceIptu}</Price>
      </div>
      {type === 'sell' && (
        <>
          <div className="container-price">
            <BodySecondary type="bold">Taxa de serviços</BodySecondary>
            <Price type="small">{priceServiceFee}</Price>
          </div>
          <div className="container-price">
            <BodySecondary type="bold">Aluguel bruto</BodySecondary>
            <Price type="small">{priceGrossRent}</Price>
          </div>
          <Divider />
          <div className="container-price">
            <BodySecondary type="bold">Total</BodySecondary>
            <Price type="small">{pricetotal}</Price>
          </div>
        </>
      )}
      <div
        className="container-user"
        style={{
          border: ` 1px solid ${colors.NeutralLight}`,
          borderRadius: constants.font.SmallRadius,
        }}
      >
        {imageUser}
        <div className="name-broker">
          <div className="name-icon">
            <Label type="bold">{nameUser}</Label>
            {checked && <FontAwesomeIcon icon={faCircleCheck} color={colors.FeedbackSuccess} />}
          </div>
          <Caption color="neutralXDark">{broker}</Caption>
        </div>
      </div>

      <div className="container-button-booking">
        <ButtonPrimary
          variant="CTA"
          compact={true}
          expanded={true}
          icon={<FontAwesomeIcon icon={faWhatsapp} style={{ fontSize: '24px' }} />}
        >
          Falar com o corretor
        </ButtonPrimary>
        <div className="button-booking">
          <ButtonPrimary compact={true} expanded={true}>
            Agendar visita
          </ButtonPrimary>
        </div>
        <div className="container-icons">
          <div className="icon-share-favorited">
            <FontAwesomeIcon icon={faShare} />
            <H3>Compartilhar</H3>
          </div>
          <div className="icon-share-favorited">
            <FontAwesomeIcon
              icon={favorite ? heartSolid : heartRegular}
              color={favorite ? 'red' : ''}
              onClick={() => {
                if (favorite) {
                  setFavorite(false);
                } else {
                  setFavorite(true);
                }
              }}
            />
            <H3>{favorite ? 'Favoritado' : 'Favoritar'}</H3>
          </div>
        </div>
      </div>
    </ContainerCard>
  );
}
