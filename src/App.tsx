import React, { useState } from 'react';
import './App.css';
import { Badge } from './components/Badges/Badges';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage, faVideo } from '@fortawesome/free-solid-svg-icons';

function App() {
  const [selectedBadge, setSelectedBadge] = useState('');

  const imagem1 = 'Imagem 1';
  const imagem2 = 'Imagem 2';

  return (
    <div className="App">
      <Badge
        title={imagem1}
        icon={<FontAwesomeIcon icon={faVideo} color={selectedBadge === imagem1 ? 'white' : 'black'} />}
        selected={selectedBadge === imagem1}
        onClick={() => setSelectedBadge(imagem1)}
      />
      <Badge
        title={imagem2}
        icon={<FontAwesomeIcon icon={faImage} color={selectedBadge === imagem2 ? 'white' : 'black'} />}
        selected={selectedBadge === imagem2}
        onClick={() => setSelectedBadge(imagem2)}
      />
    </div>
  );
}

export default App;
