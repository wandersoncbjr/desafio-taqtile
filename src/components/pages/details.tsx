import { useQuery } from '@apollo/client';
import { GET_PROPERTY_DETAILS, PropertyDetailsResponse } from '../../graphql/queries/property-details';
import { SectionCarouselImmobile } from '../carousel-section-immobile/carousel-section-immobile';
import { SectionDescriptionImmobile } from '../description-immobile/section-immobile';
import { Footer } from '../footer/footer';
import { Location } from '../location/location';
import { Menu } from '../menu/menu';
import { SectionItems } from '../section-items-immobile/section-items-immobile';
import { useParams } from 'react-router-dom';
import { Proximities } from '../proximities/proximities';

export function PropertyDetails() {
  const { id } = useParams();
  const propertyDatailsResult = useQuery<PropertyDetailsResponse>(GET_PROPERTY_DETAILS, {
    variables: { propertyDetailsId: id },
  });

  return (
    <>
      {propertyDatailsResult.data?.propertyDetails ? (
        <>
          <Menu />
          <SectionCarouselImmobile immobileData={propertyDatailsResult.data.propertyDetails.imageUrls} />
          <SectionDescriptionImmobile property={propertyDatailsResult.data.propertyDetails} />
          <SectionItems
            title="O que esse lugar oferece"
            variant="Immobile"
            sectionItemImmbolieData={propertyDatailsResult.data.propertyDetails.availableOnProperty}
          />
          <SectionItems
            title="Disponível no condomínio"
            variant="Condominium"
            sectionItemCondominiumData={propertyDatailsResult.data.propertyDetails.availableOnCondominium}
          />
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingInline: '60px',
            }}
          >
            <Proximities proximities={propertyDatailsResult.data.propertyDetails.proximities} />
            <div style={{ width: '390px', height: '415px' }}>
              <Location address={propertyDatailsResult.data.propertyDetails.address} />
            </div>
          </div>
          <Footer />
        </>
      ) : (
        'loading'
      )}
    </>
  );
}
