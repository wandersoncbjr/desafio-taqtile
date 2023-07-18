/* eslint-disable no-unused-vars */
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import {
  faBell,
  faCar,
  faCutlery,
  faDiceFive,
  faElevator,
  faFaceSmile,
  faGamepad,
  faHouse,
  faHouseUser,
  faJugDetergent,
  faLeaf,
  faLightbulb,
  faPaw,
  faPersonSwimming,
  faTableTennis,
  faWarehouse,
} from '@fortawesome/free-solid-svg-icons';

export enum Immobileitems {
  AmericanKitchen = 'AmericanKitchen',
  ServiceArea = 'ServiceArea',
  Garden = 'Garden',
  Garage = 'Garage',
  PrivatePool = 'PrivatePool',
  GasShower = 'GasShower',
  Furniture = 'Furniture',
  Roof = 'Roof',
  BellSystem = 'BellSystem',
}

export enum CondominiumItems {
  Pool = 'Pool',
  Concierge = 'Concierge',
  Playground = 'Playground',
  SportsCourt = 'SportsCourt',
  Elevator = 'Elevator',
  Laundry = 'Laundry',
  PetArea = 'PetArea',
  ToyLibrary = 'ToyLibrary',
  Parking = 'Parking',
}

export type IconMappings = Record<string, { icon: IconDefinition; title: string }>;

export const immobileIconMapping: IconMappings = {
  [Immobileitems.AmericanKitchen]: {
    icon: faCutlery,
    title: 'Cozinha americana',
  },
  [Immobileitems.ServiceArea]: {
    icon: faLeaf,
    title: 'Área de serviço',
  },
  [Immobileitems.Garden]: {
    icon: faLeaf,
    title: 'Jardim',
  },
  [Immobileitems.Garage]: {
    icon: faWarehouse,
    title: 'Garagem',
  },
  [Immobileitems.PrivatePool]: {
    icon: faPersonSwimming,
    title: 'Piscina privada',
  },
  [Immobileitems.GasShower]: {
    icon: faDiceFive,
    title: 'Chuveiro a Gás',
  },
  [Immobileitems.Furniture]: {
    icon: faLightbulb,
    title: 'Mobílias',
  },
  [Immobileitems.Roof]: {
    icon: faHouse,
    title: 'Cobertura',
  },
  [Immobileitems.BellSystem]: {
    icon: faBell,
    title: 'Sistema de campainha',
  },
};

export const condominiumIconMapping: IconMappings = {
  [CondominiumItems.Pool]: {
    icon: faPersonSwimming,
    title: 'Piscina',
  },
  [CondominiumItems.Concierge]: {
    icon: faHouseUser,
    title: 'Portaria',
  },
  [CondominiumItems.Playground]: {
    icon: faFaceSmile,
    title: 'Playground',
  },
  [CondominiumItems.SportsCourt]: {
    icon: faTableTennis,
    title: 'Quadra esportiva',
  },
  [CondominiumItems.Elevator]: {
    icon: faElevator,
    title: 'Elevador',
  },
  [CondominiumItems.Laundry]: {
    icon: faJugDetergent,
    title: 'Lavanderia',
  },
  [CondominiumItems.PetArea]: {
    icon: faPaw,
    title: 'Área pet',
  },
  [CondominiumItems.ToyLibrary]: {
    icon: faGamepad,
    title: 'Brinquedoteca',
  },
  [CondominiumItems.Parking]: {
    icon: faCar,
    title: 'Estacionamento',
  },
};

export const sectionItemImmbolieData = {
  availableOnProperty: ['AmericanKitchen', 'Garden', 'Garage', 'PrivatePool', 'GasShower'],
};

export const sectionItemCondominiumData = {
  availableOnCondominium: ['Pool', 'Playground', 'Concierge', 'SportsCourt', 'Loundry'],
};
