import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { Immobileitems, CondominiumItems } from './icons-mapped-immobile';

export const possibleItemsInProperty = [
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

export const possibleItemsInCondominium = [
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
  availableItems: string[] | undefined,
  mappings: Record<string, ItemData>,
): ItemData[] {
  return possibleItems.filter((item) => availableItems?.includes(item)).map((item) => mappings[item]);
}

export function getItemsNotPresent(
  possibleItems: string[],
  availableItems: string[] | undefined,
  mappings: Record<string, ItemData>,
): ItemData[] {
  return possibleItems.filter((item) => !availableItems?.includes(item)).map((item) => mappings[item]);
}
