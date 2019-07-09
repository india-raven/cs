import React from "react";
import "./App.css";
import Map from "./Map";
import history from "./history";
import { Router } from "react-router-dom";
import GeoFire from "./Fire";
import Checkout from "./component/Checkout";
import Navbar from "./component/Navbar";
import Routes from "./component/Routes";
// import SearchAppBar from "./component/searchappbar";

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Navbar />
        <Routes />
        {/* <Map /> */}
        {/* <Checkout
        name={"India Raven"}
        description={"Fight climate change"}
        amount={1}
      /> */}
      </Router>
    </div>
  );
}

export default App;
