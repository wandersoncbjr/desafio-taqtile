import React from 'react';
import './App.css';
import { ItemsCard } from './components/ItemsCard/ItemsCard';
import img from './components/ItemsCard/garagem.svg';

function App() {
  return (
    <div className="App">
      <ItemsCard title="1 vaga" icon={<img src={img} />}></ItemsCard>
      <ItemsCard title="1 vaga" icon={<img src={img} />}></ItemsCard>
      <ItemsCard title="1 vaga" icon={<img src={img} />}></ItemsCard>
      <ItemsCard title="1 vaga" icon={<img src={img} />}></ItemsCard>
      <ItemsCard title="1 vaga" icon={<img src={img} />}></ItemsCard>
    </div>
  );
}

export default App;
