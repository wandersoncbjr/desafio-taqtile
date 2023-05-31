import React from 'react';
import './App.css';
import { CardProperties } from './components/cards/cardProperties';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import img from './components/cards/cardProperties/Svg.svg';

const icons = [
  { category: 'bathroom', detail: '3 quartos' },
  { category: 'room', detail: '2 banheiros' },
  { category: 'square-meter', detail: '5x7 m²' },
];

function App() {
  return (
    <div className="App">
      <CardProperties
        img={<img src={img} />}
        icons={icons}
        icon={<FontAwesomeIcon icon={faHeart} />}
        price={20000.01}
        title="Alphaville, SP"
        description="Barueri, 32394, São Paulo"
      />
    </div>
  );
}

export default App;
