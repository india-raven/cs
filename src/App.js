import React from "react";
import "./App.css";
import Map from "./Map";
import Fire from "./Fire";
import Checkout from "./component/Checkout";

function App() {
  return (
    <div className="App">
      {/* <Map /> */}
      <Checkout
        name={"India Raven"}
        description={"Fight climate change"}
        amount={1}
      />
    </div>
  );
}

export default App;
