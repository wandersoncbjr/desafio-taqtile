import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import {
  immobileIconMapping,
  sectionItemImmbolieData,
  sectionItemCondominiumData,
  condominiumIconMapping,
  Immobileitems,
  CondominiumItems,
} from './icons-mapped-immobile.js';

const possibleItemsInProperty = [
  Immobileitems.AmericanKitchen,
  Immobileitems.ServiceArea,
  Immobileitems.Garden,
  Immobileitems.Garage,
  Immobileitems.PrivatePool,
  Immobileitems.GasShower,
  Immobileitems.Furniture,
  Immobileitems.Roof,
  Immobileitems.BellSystem,
];

const possibleItemsInCondominium = [
  CondominiumItems.Pool,
  CondominiumItems.Concierge,
  CondominiumItems.Playground,
  CondominiumItems.SportsCourt,
  CondominiumItems.Elevator,
  CondominiumItems.Laundry,
  CondominiumItems.PetArea,
  CondominiumItems.ToyLibrary,
  CondominiumItems.Parking,
];

export interface ItemData {
  icon: IconDefinition;
  title: string;
}

export function getItemsPresent(
  possibleItems: string[],
  availableItems: string[],
  mappings: Record<string, ItemData>,
): ItemData[] {
  return possibleItems.filter((item) => availableItems.includes(item)).map((item) => mappings[item]);
}

export function getItemsNotPresent(
  possibleItems: string[],
  availableItems: string[],
  mappings: Record<string, ItemData>,
): ItemData[] {
  return possibleItems.filter((item) => !availableItems.includes(item)).map((item) => mappings[item]);
}

export const renderedItemsNotPresentInProperty = getItemsNotPresent(
  possibleItemsInProperty,
  sectionItemImmbolieData,
  immobileIconMapping,
);

export const renderedItemsPresentInProperty = getItemsPresent(
  possibleItemsInProperty,
  sectionItemImmbolieData,
  immobileIconMapping,
);

export const renderedItemsNotPresentInCondominium = getItemsNotPresent(
  possibleItemsInCondominium,
  sectionItemCondominiumData,
  condominiumIconMapping,
);
export const renderedItemsPresentInCondominium = getItemsPresent(
  possibleItemsInCondominium,
  sectionItemCondominiumData,
  condominiumIconMapping,
);
