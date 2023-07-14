import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import {
  immobileIconMapping,
  SectionItemImmbolieData,
  SectionItemCondominiumData,
  condominiumIconMapping,
} from './icons-mapped-immobile.ts';

const possibleItemsInProperty = {
  availableOnProperty: [
    'AmericanKitchen',
    'serviceArea',
    'Garden',
    'Garage',
    'PrivatePool',
    'GasShower',
    'furniture',
    'Roof',
    'bellSystem',
  ],
};

const possibleItemsInCondominium = {
  availableOnCondominium: [
    'Pool',
    'Playground',
    'Concierge',
    'SportsCourt',
    'Elevator',
    'Loundry',
    'petArea',
    'toyLibrary',
    'Parking',
  ],
};
interface ItemData {
  icon: IconDefinition;
  title: string;
}

export function getItemsPresent(
  possibleItems: string[],
  availableItems: string[],
  mappings: Record<string, ItemData>,
): { data: ItemData }[] {
  return possibleItems
    .filter((item) => availableItems.includes(item))
    .map((item) => ({
      data: mappings[item],
    }));
}

export function getItemsNotPresent(
  possibleItems: string[],
  availableItems: string[],
  mappings: Record<string, ItemData>,
): { data: ItemData }[] {
  return possibleItems
    .filter((item) => !availableItems.includes(item))
    .map((item) => ({
      data: mappings[item],
    }));
}

export const renderedItemsNotPresentInProperty = getItemsNotPresent(
  possibleItemsInProperty.availableOnProperty,
  SectionItemImmbolieData.availableOnProperty,
  immobileIconMapping,
);

export const renderedItemsPresentInProperty = getItemsPresent(
  possibleItemsInProperty.availableOnProperty,
  SectionItemImmbolieData.availableOnProperty,
  immobileIconMapping,
);

export const renderedItemsNotPresentInCondominium = getItemsNotPresent(
  possibleItemsInCondominium.availableOnCondominium,
  SectionItemCondominiumData.availableOnCondominium,
  condominiumIconMapping,
);
export const renderedItemsPresentInCondominium = getItemsPresent(
  possibleItemsInCondominium.availableOnCondominium,
  SectionItemCondominiumData.availableOnCondominium,
  condominiumIconMapping,
);
