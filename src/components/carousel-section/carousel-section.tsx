import { CardCategory } from '../cards/card-category/card-category';
import { Carrousel } from '../carousel-properties/carousel';
import { Heading2 } from '../typography/headline/h2';
import { CardProperties } from '../cards/card-properties/card-properties';

interface CarouselSectionData {
  type: string;
  name: string;
  imageUrl: string;
  dataProperty?: { category: string; detail: string }[];
  numberOfProperties: number;
}

interface CardCarouselSectionProps {
  title: string;
  cardsData: CarouselSectionData[];
}

export function CarouselSection({ title, cardsData }: CardCarouselSectionProps) {
  const renderCard = ({ type, name, imageUrl, dataProperty, numberOfProperties }: CarouselSectionData) => {
    if (type === 'category') {
      return <CardCategory key={name} title={name} description={`${numberOfProperties} Imóveis`} image={imageUrl} />;
    } else {
      return (
        <CardProperties
          key={name}
          img={<img src={imageUrl} alt="Property" />}
          price={numberOfProperties}
          title={name}
          description="A spacious and modern house in a quiet neighborhood."
          data={dataProperty}
        />
      );
    }
  };

  const renderCarouselData = cardsData.map(renderCard);

  return (
    <div>
      <Heading2>{title}</Heading2>
      <Carrousel>{renderCarouselData}</Carrousel>
    </div>
  );
}
