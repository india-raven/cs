import React from 'react';
import logo from './logo.svg';
import './App.css';
import Chart from './Chart'
import ChartL from './GraphLine'
import ChartLine from './ChartLine'
import ChartBubble from './ChartBubble'
import data from './bubbleData'
import data_l from './bubbleData'
import gases from './gases'

function App() {
  return (
    <div className="App">
      <header className="App-header">   
      </header>
      <body>
        <Chart />
        <ChartLine data={[  {couse: 'H2O 36-70%', value: 12},
                            {couse: 'CO2 9-26%', value: 6},
                            {couse: 'CH4 4-9%', value: 5},
                            {couse: 'O3 3-7%', value: 4}]}/> 
        <ChartBubble data={data}/>
      </body>
    </div>
  );
}

export default App;
