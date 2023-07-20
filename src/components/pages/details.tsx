import { SectionCarouselImmobile } from '../carousel-section-immobile/carousel-section-immobile';
import { SectionDescriptionImmobile } from '../description-immobile/section-immobile';
import { Footer } from '../footer/footer';
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
      <SectionItems title="Disponível no- condomínio" variant="Condominium" />
      <Proximities />
      <Footer />
    </>
  );
}
