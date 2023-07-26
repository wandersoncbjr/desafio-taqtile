import React from 'react';
import { BodySecondary } from '../typography/body/body-secondary';
import { Display } from '../typography/display/display';
import location from './location.svg';
import './section-immobile.css';
import { ContainerCard } from '../cards/card-container/card-container';
import { ItemsCard } from '../items-card/items-card';
import { faBath, faBed, faCar, faRulerCombined, faWaterLadder } from '@fortawesome/free-solid-svg-icons';
import { Heading2 } from '../typography/headline/h2';
import { Separator } from '../separator/separator';
import { PropertyDetailsData } from '../../graphql/queries/property-details';

interface SectionDescriptionImmobileProps {
  property: PropertyDetailsData;
}

export function SectionDescriptionImmobile({ property }: SectionDescriptionImmobileProps) {
  return (
    <div className="container-section-immobile">
      <Display color="NeutralXdark">{property.shortDescription}</Display>
      <div className="location">
        <img src={location} alt="Location" />
        <BodySecondary>{`${property.address.street}, ${property.address.streetNumber}, ${property.address.complement}, ${property.address.district}, ${property.address.city}`}</BodySecondary>
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
