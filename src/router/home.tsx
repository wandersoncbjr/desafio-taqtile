import { Banner } from '../components/banner/banner';
import { CarouselSection } from '../components/carousel-section/carousel-section';
import { Footer } from '../components/footer/footer';
import { Hero } from '../components/hero/hero';
import { Separator } from '../components/separator/separatos';

export function Home() {
  return (
    <>
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
