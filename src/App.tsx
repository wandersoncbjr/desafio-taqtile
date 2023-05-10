import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Price } from "./components/typography/price/price";
import { Heading1 } from "./components/typography/headline/h1";


function App() {
  return (
    <div className="App" style={{background: "#808080"}}>
      <Price type="small">BIG</Price>
      <Heading1>h1</Heading1>
    </div>
  );
}

export default App;
