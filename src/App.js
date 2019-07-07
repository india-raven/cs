
import React from "react";
import "./App.css";
import Map from "./Map";
import Fire from "./Fire";
import Checkout from "./component/Checkout";
import './App.css';
import { Route, Switch, Router } from 'react-router';
// import ReactPageScroller from "react-page-scroller";


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
