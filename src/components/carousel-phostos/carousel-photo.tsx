import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './carousel-photo.css';

type CarouselProps = {
  children: React.ReactNode;
};

export const CarouselPhotos: React.FC<CarouselProps> = ({ children }) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div style={{ margin: '60px' }}>
      <Carousel responsive={responsive} itemClass="carousel-item">
        {children}
      </Carousel>
    </div>
  );
};
