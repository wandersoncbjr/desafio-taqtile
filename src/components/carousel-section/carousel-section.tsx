import React from 'react';
import { gql, useQuery } from '@apollo/client';
import { Heading2 } from '../typography/headline/h2';
import { CardCategory } from '../cards/card-category/card-category';
import { Carrousel } from '../carousel-properties/carousel';

const GET_CATEGORIES = gql`
  query categoriesProperties {
    categories {
      imageUrl
      name
      numberOfProperties
    }
  }
`;

interface Category {
  imageUrl: string;
  name: string;
  numberOfProperties: number;
}

interface QueryResult {
  categories: Category[] | undefined;
}

interface CardCarouselSectionProps {
  title: string;
}

export function CarouselSection({ title }: CardCarouselSectionProps) {
  const { data, error, loading } = useQuery<QueryResult>(GET_CATEGORIES);

  return (
    <div>
      <Heading2 key={title}>{title}</Heading2>
      {loading && 'Loading...'}
      {error && `Error: ${error.message}`}
      {data?.categories && data?.categories && (
        <Carrousel>
          {data.categories.map((category: Category) => (
            <CardCategory
              key={category.name}
              title={category.name}
              image={category.imageUrl}
              numberOfProperties={category.numberOfProperties}
            />
          ))}
        </Carrousel>
      )}
    </div>
  );
}
