import React from 'react';
import { useQuery } from '@apollo/client';
import { Heading2 } from '../typography/headline/h2';
import { CardCategory } from '../cards/card-category/card-category';
import { Carrousel } from '../carousel-properties/carousel';
import { GET_CATEGORIES, QueryResult, Category } from '../../graphql/queries/categories';
import { CardProperties } from '../cards/card-properties/card-properties';

interface CardCarouselSectionProps {
  title: string;
  type: 'category' | 'property';
}

const propertiesData = {
  data: {
    recentProperties: [
      {
        buyPrices: {
          total: 65000000,
        },
        area: '8x10 m²',
        bathrooms: 2,
        bedrooms: 2,
        address: {
          city: 'Osasco',
          state: 'SP',
          district: 'Bonfim',
          streetNumber: '3239',
        },
        imageUrls: [
          'https://storage.googleapis.com/instituto-taqtile/desafio/property1_1.png',
          'https://storage.googleapis.com/instituto-taqtile/desafio/property1_2.png',
          'https://storage.googleapis.com/instituto-taqtile/desafio/property1_3.png',
        ],
      },
      {
        buyPrices: {
          total: 65000000,
        },
        area: '8x10 m²',
        bathrooms: 2,
        bedrooms: 2,
        address: {
          city: 'Osasco',
          state: 'SP',
          district: 'Bonfim',
          streetNumber: '3239',
        },
        imageUrls: [
          'https://storage.googleapis.com/instituto-taqtile/desafio/property1_1.png',
          'https://storage.googleapis.com/instituto-taqtile/desafio/property1_2.png',
          'https://storage.googleapis.com/instituto-taqtile/desafio/property1_3.png',
        ],
      },
      {
        buyPrices: {
          total: 65000000,
        },
        area: '8x10 m²',
        bathrooms: 2,
        bedrooms: 2,
        address: {
          city: 'Osasco',
          state: 'SP',
          district: 'Bonfim',
          streetNumber: '3239',
        },
        imageUrls: [
          'https://storage.googleapis.com/instituto-taqtile/desafio/property1_1.png',
          'https://storage.googleapis.com/instituto-taqtile/desafio/property1_2.png',
          'https://storage.googleapis.com/instituto-taqtile/desafio/property1_3.png',
        ],
      },
      {
        buyPrices: {
          total: 65000000,
        },
        area: '8x10 m²',
        bathrooms: 2,
        bedrooms: 2,
        address: {
          city: 'Osasco',
          state: 'SP',
          district: 'Bonfim',
          streetNumber: '3239',
        },
        imageUrls: [
          'https://storage.googleapis.com/instituto-taqtile/desafio/property1_1.png',
          'https://storage.googleapis.com/instituto-taqtile/desafio/property1_2.png',
          'https://storage.googleapis.com/instituto-taqtile/desafio/property1_3.png',
        ],
      },
      {
        buyPrices: {
          total: 65000000,
        },
        area: '8x10 m²',
        bathrooms: 2,
        bedrooms: 2,
        address: {
          city: 'Osasco',
          state: 'SP',
          district: 'Bonfim',
          streetNumber: '3239',
        },
        imageUrls: [
          'https://storage.googleapis.com/instituto-taqtile/desafio/property1_1.png',
          'https://storage.googleapis.com/instituto-taqtile/desafio/property1_2.png',
          'https://storage.googleapis.com/instituto-taqtile/desafio/property1_3.png',
        ],
      },
      {
        buyPrices: {
          total: 65000000,
        },
        area: '8x10 m²',
        bathrooms: 2,
        bedrooms: 2,
        address: {
          city: 'Osasco',
          state: 'SP',
          district: 'Bonfim',
          streetNumber: '3239',
        },
        imageUrls: [
          'https://storage.googleapis.com/instituto-taqtile/desafio/property1_1.png',
          'https://storage.googleapis.com/instituto-taqtile/desafio/property1_2.png',
          'https://storage.googleapis.com/instituto-taqtile/desafio/property1_3.png',
        ],
      },
      {
        buyPrices: {
          total: 65000000,
        },
        area: '8x10 m²',
        bathrooms: 2,
        bedrooms: 2,
        address: {
          city: 'Osasco',
          state: 'SP',
          district: 'Bonfim',
          streetNumber: '3239',
        },
        imageUrls: [
          'https://storage.googleapis.com/instituto-taqtile/desafio/property1_1.png',
          'https://storage.googleapis.com/instituto-taqtile/desafio/property1_2.png',
          'https://storage.googleapis.com/instituto-taqtile/desafio/property1_3.png',
        ],
      },
      {
        buyPrices: {
          total: 65000000,
        },
        area: '8x10 m²',
        bathrooms: 2,
        bedrooms: 2,
        address: {
          city: 'Osasco',
          state: 'SP',
          district: 'Bonfim',
          streetNumber: '3239',
        },
        imageUrls: [
          'https://storage.googleapis.com/instituto-taqtile/desafio/property1_1.png',
          'https://storage.googleapis.com/instituto-taqtile/desafio/property1_2.png',
          'https://storage.googleapis.com/instituto-taqtile/desafio/property1_3.png',
        ],
      },
    ],
  },
};

export function CarouselSection({ title, type }: CardCarouselSectionProps) {
  const { data, error, loading } = useQuery<QueryResult>(GET_CATEGORIES);

  return (
    <div style={{ paddingLeft: '60px' }}>
      <Heading2 key={title}>{title}</Heading2>
      {loading && 'Loading...'}
      {error && `Error: ${error.message}`}

      {type === 'category' ? (
        data?.categories && (
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
        )
      ) : (
        <Carrousel>
          {propertiesData?.data.recentProperties.map((property) => (
            <CardProperties
              img={property.imageUrls[0]}
              key={property.address.city}
              description={`${property.address.district}, ${property.address.streetNumber}, ${property.address.state}`}
              price={property.buyPrices.total}
              title={`${property.address.city}, ${property.address.state}`}
              data={[
                { property: 'bathroom', detail: `${property.bathrooms} banheiros` },
                { property: 'bedrooms', detail: `${property.bedrooms} quartos` },
                { property: 'square-meter', detail: property.area },
              ]}
            />
          ))}
        </Carrousel>
      )}
    </div>
  );
}
