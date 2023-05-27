import React from 'react';
import './App.css';
import { Card } from './components/cardCategory/card';
import Img from './components/cardCategory/svg.svg';

function App() {
  return (
    <div className="App">
      <Card image={<img src={Img} />} title="Com piscina" description="723,457 Imóveis"></Card>
    </div>
  );
}

export default App;
