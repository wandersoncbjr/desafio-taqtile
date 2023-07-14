import { SectionCarouselImmobile } from '../carousel-section-immobile/carousel-section-immobile';
import { SectionDescriptionImmobile } from '../description-immobile/section-immobile';
import { Footer } from '../footer/footer';
import { Menu } from '../menu/menu';
import { SectionItems } from '../section-items-immobile.tsx/section-items-immobile';

export function PropertyDetails() {
  return (
    <>
      <Menu />
      <SectionCarouselImmobile />
      <SectionDescriptionImmobile />
      <SectionItems title="O que esse lugar oferece" variant="Immobile" />
      <SectionItems title="Disponível no condomínio" variant="condominium" />
      <Footer />
    </>
  );
}