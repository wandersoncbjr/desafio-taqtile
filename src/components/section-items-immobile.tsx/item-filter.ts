import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import {
  immobileIconMapping,
  sectionItemImmbolieData,
  sectionItemCondominiumData,
  condominiumIconMapping,
  Immobileitems,
  CondominiumItems,
} from './icons-mapped-immobile.ts';

const possibleItemsInProperty = {
  availableOnProperty: [
    Immobileitems.AmericanKitchen,
    Immobileitems.ServiceArea,
    Immobileitems.Garden,
    Immobileitems.Garage,
    Immobileitems.PrivatePool,
    Immobileitems.GasShower,
    Immobileitems.Furniture,
    Immobileitems.Roof,
    Immobileitems.BellSystem,
  ],
};

const possibleItemsInCondominium = {
  availableOnCondominium: [
    CondominiumItems.Pool,
    CondominiumItems.Concierge,
    CondominiumItems.Playground,
    CondominiumItems.SportsCourt,
    CondominiumItems.Elevator,
    CondominiumItems.Laundry,
    CondominiumItems.PetArea,
    CondominiumItems.ToyLibrary,
    CondominiumItems.Parking,
  ],
};
export interface ItemData {
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
  sectionItemImmbolieData.availableOnProperty,
  immobileIconMapping,
);

export const renderedItemsPresentInProperty = getItemsPresent(
  possibleItemsInProperty.availableOnProperty,
  sectionItemImmbolieData.availableOnProperty,
  immobileIconMapping,
);

export const renderedItemsNotPresentInCondominium = getItemsNotPresent(
  possibleItemsInCondominium.availableOnCondominium,
  sectionItemCondominiumData.availableOnCondominium,
  condominiumIconMapping,
);
export const renderedItemsPresentInCondominium = getItemsPresent(
  possibleItemsInCondominium.availableOnCondominium,
  sectionItemCondominiumData.availableOnCondominium,
  condominiumIconMapping,
);
