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

export type IconMappings = Record<string, { icon: IconDefinition; title: string };

export const immobileIconMapping: IconMappings = {
  AmericanKitchen: {
    icon: faCutlery,
    title: 'Cozinha americana',
  },
  serviceArea: {
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
  bellSystem: {
    icon: faBell,
    title: 'sistema de campainha',
  },
};

export const condominiumIconMapping: IconMappings = {
  Pool: {
    icon: faPersonSwimming,
    title: 'Piscina',
  },
  Concierge: {
    icon: faHouseUser,
    title: 'Portaria',
  },
  Playground: {
    icon: faFaceSmile,
    title: 'Playground',
  },
  SportsCourt: {
    icon: faTableTennis,
    title: 'Quadra esportiva',
  },
  Elevator: {
    icon: faElevator,
    title: 'Elevador',
  },
  Loundry: {
    icon: faJugDetergent,
    title: 'Lavanderia',
  },
  petArea: {
    icon: faPaw,
    title: 'Área pet',
  },
  toyLibrary: {
    icon: faGamepad,
    title: 'Brinquedoteca',
  },
  Parking: {
    icon: faCar,
    title: 'Estacionamento',
  },
};

export const SectionItemImmbolieData = {
  availableOnProperty: ['AmericanKitchen', 'Garden', 'Garage', 'PrivatePool', 'GasShower'],
};

export const SectionItemCondominiumData = {
  availableOnCondominium: ['Pool', 'Playground', 'Concierge', 'SportsCourt', 'Loundry'],
};
