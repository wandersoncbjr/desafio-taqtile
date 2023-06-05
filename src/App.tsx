import React from 'react';
import './App.css';
import { CardBooking } from './components/cards/card-booking';
import img from './components/cards/card-booking/img.svg';

const data = {
  priceCondominium: '1000',
  priceIptu: '1000',
  priceServiceFee: '1000',
  priceGrossRent: '1000',
  total: '2900',
};

function App() {
  return (
    <div className="App">
      <CardBooking
        image={<img src={img} />}
        prices={data}
        nameUser="Jonathan Marques"
        broker="Imobilar Corretora Imobiliária"
        type="rent"
      />

      <CardBooking
        image={<img src={img} />}
        prices={data}
        nameUser="Jonathan Marques"
        broker="Imobilar Corretora Imobiliária"
        type="sell"
      />
    </div>
  );
}

export default App;
