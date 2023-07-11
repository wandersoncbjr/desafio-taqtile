import React from 'react';
import { BodySecondary } from '../typography/body/body-secondary';
import { Display } from '../typography/display/display';
import location from './location.svg';
import './section-immobile.css';
import { ContainerCard } from '../cards/card-container/card-container';
import { ItemsCard } from '../items-card/items-card';
import { faBath, faBed, faCar, faRulerCombined, faWaterLadder } from '@fortawesome/free-solid-svg-icons';
import { Heading2 } from '../typography/headline/h2';
import { Separator } from '../separator/separatos';

export function SectionImmobile() {
  const sectionImmbileData = {
    data: {
      recentProperties: [
        {
          bathrooms: 2,
          bedrooms: 2,
          area: '8x10 m²',
          shortDescription: 'Casa à venda em Osasco, bairro Bonfim, melhor da região!',
          description:
            'A casa se insere em um clima de paz, de natureza. A decoração acompanha a magia desse microclima ecológico que encanta a adultos e crianças. A casa foi construída em madeira nobre. Decorada com lustres temáticos e estruturas que dão vida ao lugar. Ideal para todos que busquem descansar ou trabalhar e desejam morar na melhor região de Osasco - SP.',
          address: {
            street: 'Avenida das Nações Unidas',
            streetNumber: '3239',
            complement: 'Complemento 245B',
            district: 'Bonfim',
            city: 'Osasco',
          },
          hasPool: true,
          hasGarage: true,
        },
      ],
    },
  };

  const property = sectionImmbileData.data.recentProperties[0];

  return (
    <div className="container-section-immobile">
      <Display color="NeutralXdark">{property.shortDescription}</Display>
      <div className="location">
        <img src={location} alt="Location" />
        <BodySecondary>{`${property.address.street} ${property.address.streetNumber}, ${property.address.complement}, ${property.address.district}, ${property.address.city}`}</BodySecondary>
      </div>
      <Separator size="small" />
      <ContainerCard marginAll>
        <div className="items-card">
          <ItemsCard icon={faBed} title={`${property.bedrooms} Quartos`} />
          <ItemsCard icon={faBath} title={`${property.bathrooms} Banheiros`} />
          <ItemsCard icon={faRulerCombined} title={property.area} />
          {property.hasPool && <ItemsCard icon={faWaterLadder} title="Piscina" />}
          {property.hasGarage && <ItemsCard icon={faCar} title="Garagem" />}
        </div>
      </ContainerCard>
      <div>
        <Heading2>Descrição</Heading2>
        <BodySecondary>{property.description}</BodySecondary>
      </div>
    </div>
  );
}
