import { SectionCarouselImmobile } from '../carousel-section-immobile/carousel-section-immobile';
import { SectionDescriptionImmobile } from '../description-immobile/section-immobile';
import { Footer } from '../footer/footer';
import { Menu } from '../menu/menu';
<<<<<<< HEAD
import { SectionItems } from '../section-items-immobile/section-items-immobile';
=======
import { Proximities } from '../proximities/proximities';
import { SectionItems } from '../section-items-immobile.tsx/section-items-immobile';
>>>>>>> c70e6a3 (feat: add component proximities)

export function PropertyDetails() {
  return (
    <>
      <Menu />
      <SectionCarouselImmobile />
      <SectionDescriptionImmobile />
      <SectionItems title="O que esse lugar oferece" variant="Immobile" />
<<<<<<< HEAD
      <SectionItems title="Disponível no condomínio" variant="Condominium" />
=======
      <SectionItems title="Disponível no condomínio" variant="condominium" />
      <Proximities />
>>>>>>> c70e6a3 (feat: add component proximities)
      <Footer />
    </>
  );
}
