import React from 'react';
import { SectionImmobile } from './components/carousel-section-immobile/carousel-section-immobile';
import { Menu } from './components/menu/menu';
import { Separator } from './components/separator/separatos';
import { Hero } from './components/hero/hero';
import { CarouselSection } from './components/carousel-section/carousel-section';
import { Banner } from './components/banner/banner';
import { Footer } from './components/footer/footer';

export function App() {
  return (
    <div>
      <Menu />
      <Separator size="large" />
      <Hero />
      <CarouselSection title={'Encontre o imóvel ideal para o seu estilo de vida!'} type="category" />
      <Separator size="large" />
      <Banner />
      <CarouselSection title={'Lançamentos que você pode se interessar!'} type="property" />
      <Separator size="large" />
      <SectionImmobile />
      <Footer />
    </div>
  );
}

export default App;
