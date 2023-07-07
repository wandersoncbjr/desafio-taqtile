import React from 'react';
import { useQuery } from '@apollo/client';
import { Heading2 } from '../typography/headline/h2';
import { CardCategory } from '../cards/card-category/card-category';
import { Carrousel } from '../carousel-properties/carousel';
import { GET_CATEGORIES, QueryResult, Category } from '../../graphql/queries/categories';
import { CardProperties } from '../cards/card-properties/card-properties';
import { GET_PROPERTIES, QueryData, Property } from '../../graphql/queries/properties';

interface CardCarouselSectionProps {
  title: string;
  type: 'category' | 'property';
}

export function CarouselSection({ title, type }: CardCarouselSectionProps) {
  const { data, error, loading } = useQuery<QueryResult>(GET_CATEGORIES);
  const { data: data2, error: error2, loading: loading2 } = useQuery<QueryData>(GET_PROPERTIES);

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
        <>
          {loading2 && 'Loading...'}
          {error2 && `Error: ${error2.message}`}
          {data2?.recentProperties && (
            <Carrousel>
              {data2.recentProperties.map((property: Property) => (
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
        </>
      )}
    </div>
  );
}
