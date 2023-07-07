import { gql } from '@apollo/client';

export const GET_PROPERTIES = gql`
  query Properties {
    recentProperties {
      area
      bathrooms
      bedrooms
      address {
        city
        state
        district
        streetNumber
      }
      imageUrls
      buyPrices {
        total
      }
    }
  }
`;

export interface Address {
  city: string;
  state: string;
  district: string;
  streetNumber: string;
}

export interface BuyPrices {
  total: number;
}

export interface Property {
  area: string;
  bathrooms: number;
  bedrooms: number;
  address: Address;
  imageUrls: string[];
  buyPrices: BuyPrices;
}

export interface QueryData {
  recentProperties?: Property[];
}
