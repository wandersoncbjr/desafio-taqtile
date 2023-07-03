import { gql } from '@apollo/client';

export const GET_CATEGORIES = gql`
  query categoriesProperties {
    categories {
      imageUrl
      name
      numberOfProperties
    }
  }
`;

export interface Category {
  imageUrl: string;
  name: string;
  numberOfProperties: number;
}

export interface QueryResult {
  categories?: Category[];
}
