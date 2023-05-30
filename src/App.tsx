import React from 'react';
import './App.css';
import { CardProperties } from './components/cards/cardProperties';
import Img from './components/cards/cardProperties/img.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faBed, faToilet, faRulerCombined } from '@fortawesome/free-solid-svg-icons';
import { colors } from './typography/colors';

const icons = [
  { icon: <FontAwesomeIcon color={colors.PrimaryDark} icon={faBed} />, text: '3 quartos' },
  { icon: <FontAwesomeIcon color={colors.PrimaryDark} icon={faToilet} />, text: '2 banheiros' },
  { icon: <FontAwesomeIcon color={colors.PrimaryDark} icon={faRulerCombined} />, text: '5x7 m²' },
];

function App() {
  return (
    <div className="App">
      <CardProperties
        icon={<FontAwesomeIcon icon={faHeart} />}
        icons={icons}
        img={<img src={Img} />}
        price="R$400.000"
        title="Alphaville, SP"
        description="Barueri, 32394, São Paulo"
      ></CardProperties>
    </div>
  );
}

export default App;
