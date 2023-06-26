import React from 'react';
import './App.css';
import { CarouselPhotos } from './components/carousel-phostos/carousel-photo';
import carouselPhotofrom from './components/carousel-phostos/carousel-photo.svg';

export function App() {
  return (
    <div>
      <CarouselPhotos>
        <img src={carouselPhotofrom} />
        <img src={carouselPhotofrom} />
        <img src={carouselPhotofrom} />
        <img src={carouselPhotofrom} />
        <img src={carouselPhotofrom} />
        <img src={carouselPhotofrom} />
        <img src={carouselPhotofrom} />
        <img src={carouselPhotofrom} />
        <img src={carouselPhotofrom} />
      </CarouselPhotos>
    </div>
  );
}

export default App;
