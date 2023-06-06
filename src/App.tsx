import React from 'react';
import './App.css';
import { CardBooking } from './components/cards/card-booking';
import imageUser from './components/cards/card-booking/imageUser.svg';

const data = {
  priceCondominium: 1000,
  priceIptu: 1000,
  priceServiceFee: 1000,
  priceGrossRent: 1000,
  pricetotal: 1000,
};

function App() {
  return (
    <div className="App">
      <CardBooking
        imageUser={<img src={imageUser} />}
        prices={data}
        nameUser="Jonathan Marques"
        broker="Imobilar Corretora Imobiliária"
        type="rent"
        checked={false}
      />

      <CardBooking
        checked={true}
        imageUser={<img src={imageUser} />}
        prices={data}
        nameUser="Jonathan Marques"
        broker="Imobilar Corretora Imobiliária"
        type="sell"
      />
    </div>
  );
}

export default App;
