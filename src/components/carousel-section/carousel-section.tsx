import React from 'react';
import { useQuery } from '@apollo/client';
import { Heading2 } from '../typography/headline/h2';
import { CardCategory } from '../cards/card-category/card-category';
import { Carrousel } from '../carousel-properties/carousel';
import { GET_CATEGORIES, categoriesResponse, Category } from '../../graphql/queries/categories';
import { CardProperties } from '../cards/card-properties/card-properties';
import { GET_PROPERTIES, RecentPropertiesResponse, Property } from '../../graphql/queries/properties';
import { Link } from 'react-router-dom';

interface CardCarouselSectionProps {
  title: string;
  type: 'category' | 'property';
}

export function CarouselSection({ title, type }: CardCarouselSectionProps) {
  const categoriesResult = useQuery<categoriesResponse>(GET_CATEGORIES);
  const recentPropertiesResult = useQuery<RecentPropertiesResponse>(GET_PROPERTIES);

  return (
    <div style={{ paddingLeft: '60px' }}>
      <Heading2>{title}</Heading2>
      {categoriesResult.loading && 'Loading...'}
      {categoriesResult.error && `Error: ${categoriesResult.error.message}`}
      {type === 'category' ? (
        categoriesResult.data?.categories && (
          <Carrousel>
            {categoriesResult.data.categories.map((category: Category) => (
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
          {recentPropertiesResult.loading && 'Loading...'}
          {recentPropertiesResult.error && `Error: ${recentPropertiesResult.error.message}`}
          {recentPropertiesResult.data?.recentProperties && (
            <Carrousel>
              {recentPropertiesResult.data.recentProperties.map((property: Property) => (
                <Link to={`/detalhes-do-imovel/${property.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
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
                </Link>
              ))}
            </Carrousel>
          )}
        </>
      )}
    </div>
  );
}
