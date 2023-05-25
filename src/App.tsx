import React from 'react';
import './App.css';
import { Input } from './components/form/input';
import img from './components/form/Vector@2x.svg';

function App() {
  return (
    <div className="App">
      <Input placeholder="Digite sua senhad" label="senha" icon={<img src={img} />}></Input>
    </div>
  );
}

export default App;
