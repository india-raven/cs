import React from "react";
import "./App.css";
import Map from "./Map";
import { Route, Switch, Router } from "react-router";
import Checkout from "./component/Checkout";

import SearchAppBar from "./component/SearchAppBar";
import Fire from "./Fire";

function App() {
  return (
    <div className="App">
      <SearchAppBar />
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
