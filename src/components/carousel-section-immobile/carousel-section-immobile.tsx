import { CarouselPhotos } from '../carousel-phostos/carousel-photo';

interface ImmobileDataProps {
  immobileData: string[];
}

export function SectionCarouselImmobile({ immobileData }: ImmobileDataProps) {
  return (
    <CarouselPhotos>
      {immobileData.map((img, index) => (
        <img key={index} src={img} />
      ))}
    </CarouselPhotos>
  );
}
