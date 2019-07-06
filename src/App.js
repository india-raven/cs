import React from "react";
import "./App.css";
import Map from "./Map";
import { Route, Switch, Router } from "react-router";

import SearchAppBar from "./component/SearchAppBar";
import Fire from "./Fire";

function App() {
  return (
    <div className="App">
      <SearchAppBar />
      <Map />
    </div>
  );
}

export default App;
