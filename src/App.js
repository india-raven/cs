
import React from "react";
import "./App.css";
import Map from "./Map";
import Fire from "./Fire";
import Checkout from "./component/Checkout";
import React from 'react';
import './App.css';
import Map from './Map'
import { Route, Switch, Router } from 'react-router';
import Fire from './Fire';

function App() {
  return (

    <div className="App">

      <Map />
      {/* <Checkout
        name={"India Raven"}
        description={"Fight climate change"}
        amount={1}
      /> */}
    </div>

     
      

  );
}

export default App;
