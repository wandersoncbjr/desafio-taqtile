import React from 'react';
import { CarouselSection } from './components/carousel-section/carousel-section';
import { Hero } from './components/hero/hero';
import { Banner } from './components/banner/banner';
import './App.css';
import { Footer } from './components/footer/footer';

export function App() {
  return (
    <div>
      <Hero />
      <CarouselSection title={'Encontre o imóvel ideal para o seu estilo de vida!'} />
      <Banner />
      <Footer />
    </div>
  );
}

export default App;
