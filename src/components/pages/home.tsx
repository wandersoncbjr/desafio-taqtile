import { Banner } from '../banner/banner';
import { CarouselSection } from '../carousel-section/carousel-section';
import { Footer } from '../footer/footer';
import { Hero } from '../hero/hero';
import { Menu } from '../menu/menu';
import { Separator } from '../separator/separatos';

export function Home() {
  return (
    <>
      <Menu />
      <Separator size="large" />
      <Hero />
      <CarouselSection title={'Encontre o imóvel ideal para o seu estilo de vida!'} type="category" />
      <Separator size="large" />
      <Banner />
      <CarouselSection title={'Lançamentos que você pode se interessar!'} type="property" />
      <Separator size="large" />
      <Footer />
    </>
  );
}
