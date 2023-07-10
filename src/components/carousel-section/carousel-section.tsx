import React from 'react';
import { useQuery } from '@apollo/client';
import { Heading2 } from '../typography/headline/h2';
import { CardCategory } from '../cards/card-category/card-category';
import { Carrousel } from '../carousel-properties/carousel';
import { GET_CATEGORIES, categoriesResponse, Category } from '../../graphql/queries/categories';
import { CardProperties } from '../cards/card-properties/card-properties';
import { GET_PROPERTIES, RecentPropertiesResponse, Property } from '../../graphql/queries/properties';

interface CardCarouselSectionProps {
  title: string;
  type: 'category' | 'property';
}

export function CarouselSection({ title, type }: CardCarouselSectionProps) {
  const {
    data: categoriesData,
    error: categoriesError,
    loading: categoriesLoading,
  } = useQuery<categoriesResponse>(GET_CATEGORIES);
  const {
    data: recentPropertiesData,
    error: recentPropertiesError,
    loading: recentPropertiesLoading,
  } = useQuery<RecentPropertiesResponse>(GET_PROPERTIES);

  return (
    <div style={{ paddingLeft: '60px' }}>
      <Heading2 key={title}>{title}</Heading2>
      {categoriesLoading && 'Loading...'}
      {categoriesError && `Error: ${categoriesError.message}`}

      {type === 'category' ? (
        categoriesData?.categories && (
          <Carrousel>
            {categoriesData.categories.map((category: Category) => (
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
          {recentPropertiesLoading && 'Loading...'}
          {recentPropertiesError && `Error: ${recentPropertiesError.message}`}
          {recentPropertiesData?.recentProperties && (
            <Carrousel>
              {recentPropertiesData.recentProperties.map((property: Property) => (
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
