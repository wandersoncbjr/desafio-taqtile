import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { colors } from '../../typography/colors';
import { Heading4 } from '../typography/headline/h4';
import './items-card.css';
import React from 'react';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

interface PropsItemsCard {
  icon: IconDefinition;
  title: string;
}

export function ItemsCard({ icon, title }: PropsItemsCard) {
  return (
    <div className="container-card">
      <div>
        <FontAwesomeIcon icon={icon} color={colors.NeutralXdark} />
      </div>
      <Heading4>{title}</Heading4>
    </div>
  );
}
