import React from 'react';
import { CarouselSection } from './components/carousel-section/carousel-section';
import { Hero } from './components/hero/hero';

export function App() {
  return (
    <div>
      <Hero />
      <CarouselSection title={'Encontre o imóvel ideal para o seu estilo de vida!'} />
    </div>
  );
}

export default App;
