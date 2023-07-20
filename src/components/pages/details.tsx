import { SectionCarouselImmobile } from '../carousel-section-immobile/carousel-section-immobile';
import { SectionDescriptionImmobile } from '../description-immobile/section-immobile';
import { Footer } from '../footer/footer';
import { Location } from '../location/location';
import { Menu } from '../menu/menu';
import { Proximities } from '../proximities/proximities';
import { SectionItems } from '../section-items-immobile/section-items-immobile';

export function PropertyDetails() {
  return (
    <>
      <Menu />
      <SectionCarouselImmobile />
      <SectionDescriptionImmobile />
      <SectionItems title="O que esse lugar oferece" variant="Immobile" />
      <SectionItems title="Disponível no condomínio" variant="Condominium" />
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingInline: '60px',
        }}
      >
        <Proximities />
        <div style={{ width: '30%', height: '415px' }}>
          <Location />
        </div>
      </div>
      <Footer />
    </>
  );
}
