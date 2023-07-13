import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import {
  faBell,
  faCutlery,
  faDiceFive,
  faHouse,
  faLeaf,
  faLightbulb,
  faPersonSwimming,
  faWarehouse,
} from '@fortawesome/free-solid-svg-icons';

interface IconMappings {
  [record: string]: {
    icon: IconDefinition;
    title: string;
  };
}

export const iconMappings: IconMappings = {
  AmericanKitchen: {
    icon: faCutlery,
    title: 'Cozinha americana',
  },
  'service area': {
    icon: faLeaf,
    title: 'Área de serviço',
  },
  Garden: {
    icon: faLeaf,
    title: 'Jardim',
  },
  Garage: {
    icon: faWarehouse,
    title: 'Garagem',
  },
  PrivatePool: {
    icon: faPersonSwimming,
    title: 'Piscina privada',
  },
  GasShower: {
    icon: faDiceFive,
    title: 'Chuveiro a Gás',
  },
  furniture: {
    icon: faLightbulb,
    title: 'Mobílias',
  },
  Roof: {
    icon: faHouse,
    title: 'Cobertura',
  },
  'bell system': {
    icon: faBell,
    title: 'sistema de campainha',
  },
};

export const SectionItemImmbolieData = {
  availableOnProperty: ['AmericanKitchen', 'Garden', 'Garage', 'PrivatePool', 'GasShower'],
};
