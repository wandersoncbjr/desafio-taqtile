import { iconMappings, SectionItemImmbolieData } from './icons-mapped-immobile.ts';

const possibleItemsInProperty = {
  availableOnProperty: [
    'AmericanKitchen',
    'service area',
    'Garden',
    'Garage',
    'PrivatePool',
    'GasShower',
    'furniture',
    'Roof',
    'bell system',
  ],
};
export const itemsPresentInProperty = possibleItemsInProperty.availableOnProperty.filter((item) => {
  return SectionItemImmbolieData.availableOnProperty.includes(item);
});

export const itemsNotPresentInProperty = possibleItemsInProperty.availableOnProperty.filter((item) => {
  return !SectionItemImmbolieData.availableOnProperty.includes(item);
});

export const renderedItemsPresentInProperty = itemsPresentInProperty.map((item) => {
  if (iconMappings[item]) {
    return {
      data: iconMappings[item],
    };
  }
});

export const renderedItemsNotPresentInProperty = itemsNotPresentInProperty.map((item) => {
  if (iconMappings[item]) {
    return {
      data: iconMappings[item],
    };
  }
});
