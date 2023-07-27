import { gql } from '@apollo/client';

export const GET_PROPERTY_DETAILS = gql`
  query PropertyDetails($propertyDetailsId: String!) {
    propertyDetails(id: $propertyDetailsId) {
      shortDescription
      proximities {
        type
        description
      }
      imageUrls
      hasGarage
      hasPool
      bedrooms
      bathrooms
      description
      availableOnProperty
      availableOnCondominium
      area
      address {
        longitude
        latitude
        district
        street
        state
        city
        streetNumber
        complement
      }
    }
  }
`;

export interface Proximity {
  type: string;
  description: string;
}

export interface Address {
  longitude: number;
  latitude: number;
  district: string;
  street: string;
  state: string;
  city: string;
  streetNumber: string;
  complement: string;
}

export interface PropertyDetailsData {
  bathrooms: number;
  imageUrls: string[];
  shortDescription: string;
  proximities: Proximity[];
  hasGarage: boolean;
  hasPool: boolean;
  bedrooms: number;
  description: string;
  availableOnProperty: string[];
  availableOnCondominium: string[];
  area: string;
  address: Address;
}

export interface PropertyDetailsResponse {
  propertyDetails?: PropertyDetailsData;
}
