import React from 'react';
import './App.css';
import { CardCategory } from './components/cards/card-category/card-category';
import { Carrousel } from './components/carousel-properties/carousel';
import photoProperties from './components/carousel-properties/photo-properties.svg';

const dataCarousel = [
  <CardCategory title="Com piscina" description="723,457 Imóveis" image={<img src={photoProperties} />} />,
  <CardCategory title="Com piscina" description="723,457 Imóveis" image={<img src={photoProperties} />} />,
  <CardCategory title="Com piscina" description="723,457 Imóveis" image={<img src={photoProperties} />} />,
  <CardCategory title="Com piscina" description="723,457 Imóveis" image={<img src={photoProperties} />} />,
  <CardCategory title="Com piscina" description="723,457 Imóveis" image={<img src={photoProperties} />} />,
  <CardCategory title="Com piscina" description="723,457 Imóveis" image={<img src={photoProperties} />} />,
  <CardCategory title="Com piscina" description="723,457 Imóveis" image={<img src={photoProperties} />} />,
  <CardCategory title="Com piscina" description="723,457 Imóveis" image={<img src={photoProperties} />} />,
  <CardCategory title="Com piscina" description="723,457 Imóveis" image={<img src={photoProperties} />} />,
  <CardCategory title="Com piscina" description="723,457 Imóveis" image={<img src={photoProperties} />} />,
];

function App() {
  return <div className="App">{<Carrousel items={dataCarousel} />}</div>;
}

export default App;
