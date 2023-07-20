import { CarouselPhotos } from '../carousel-phostos/carousel-photo';

const immobileData = {
  imageUrls: [
    'https://storage.googleapis.com/instituto-taqtile/desafio/property1_1.png',
    'https://storage.googleapis.com/instituto-taqtile/desafio/property1_2.png',
    'https://storage.googleapis.com/instituto-taqtile/desafio/property1_3.png',
    'https://storage.googleapis.com/instituto-taqtile/desafio/property1_3.png',
    'https://storage.googleapis.com/instituto-taqtile/desafio/property1_3.png',
  ],
};

export function SectionCarouselImmobile() {
  return (
    <CarouselPhotos>
      {immobileData.imageUrls.map((img, index) => (
        <img key={index} src={img} />
      ))}
    </CarouselPhotos>
  );
}
