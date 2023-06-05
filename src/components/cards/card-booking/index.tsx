import React from 'react';
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
import { faCircleCheck, faHeart } from '@fortawesome/free-regular-svg-icons';
import { faShare } from '@fortawesome/free-solid-svg-icons';
import { H3 } from '../../typography/headline/h3';

interface DataProps {
  priceCondominium: string;
  priceIptu?: string;
  priceServiceFee?: string;
  priceGrossRent?: string;
  pricetotal?: string;
}

interface BookingProps {
  nameUser: string;
  image: React.ReactNode;
  prices: DataProps;
  broker: string;
  type?: 'sell' | 'rent';
}
export function CardBooking({ image, prices, nameUser, broker, type }: BookingProps) {
  return (
    <ContainerCard>
      <div style={{ marginLeft: '16px' }}>
        <Price type="big">R$250.000</Price>
      </div>
      <Divider />

      <div className="container-price">
        <BodySecondary type="bold">Condomínio</BodySecondary>
        <Price type="small">R${prices.priceCondominium}</Price>
      </div>
      <div className="container-price">
        <BodySecondary type="bold">IPTU</BodySecondary>
        <Price type="small">R${prices.priceIptu}</Price>
      </div>
      {type === 'sell' && (
        <>
          <div className="container-price">
            <BodySecondary type="bold">Taxa de serviços</BodySecondary>
            <Price type="small">R${prices.priceServiceFee}</Price>
          </div>
          <div className="container-price">
            <BodySecondary type="bold">Aluguel bruto</BodySecondary>
            <Price type="small">R${prices.priceServiceFee}</Price>
          </div>
        </>
      )}

      {type === 'sell' && (
        <>
          <Divider />
          <div className="container-price">
            <BodySecondary type="bold">Total</BodySecondary>
            <Price type="small">R${prices.pricetotal}</Price>
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
        {image}
        <div className="name-broker">
          <div className="name-icon">
            <Label type="bold">{nameUser}</Label>
            <FontAwesomeIcon icon={faCircleCheck} color={colors.FeedbackSuccess} />
          </div>
          <Caption color="neutralXDark">{broker}</Caption>
        </div>
      </div>

      <div className="container-button-booking">
        <ButtonPrimary variant="CTA" compact={true} expanded={true}>
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
            <H3>Favoritado</H3>
          </div>
          <div className="icon-share-favorited">
            <FontAwesomeIcon icon={faHeart} />
            <H3>Compartilhar</H3>
          </div>
        </div>
      </div>
    </ContainerCard>
  );
}
