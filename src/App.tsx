import React, { useState } from 'react';
import './App.css';
import { Badges } from './components/Badges/Badges';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage, faVideo } from '@fortawesome/free-solid-svg-icons';

function App() {
  const [selectedBadge, setSelectedBadge] = useState('');

  const handleBadgeClick = (title: string) => {
    setSelectedBadge(title);
  };

  return (
    <div className="App">
      <Badges
        title="Imagem 1"
        icon={<FontAwesomeIcon icon={faVideo} color={selectedBadge === 'Imagem 1' ? 'white' : 'black'} />}
        selected={selectedBadge === 'Imagem 1'}
        onClick={() => {
          handleBadgeClick('Imagem 1');
        }}
      />

      <Badges
        title="Imagem 2"
        icon={<FontAwesomeIcon icon={faImage} color={selectedBadge === 'Imagem 2' ? 'white' : 'black'} />}
        selected={selectedBadge === 'Imagem 2'}
        onClick={() => {
          handleBadgeClick('Imagem 2');
        }}
      />
    </div>
  );
}

export default App;
