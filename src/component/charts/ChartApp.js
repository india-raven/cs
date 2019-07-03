import React from 'react';
import './ChartApp.css';
import Chart from './Chart'
import ChartL from './GraphLine'
import ChartLine from './ChartLine'
import ChartBubble from './ChartBubble'
import data from './bubbleData'
import data_l from './bubbleData'
function ChartApp() {
  return (
    <div className="App">
      <header className="App-header">
    
      </header>
      <body>
        <Chart />
        
        <ChartLine data={[5, 2, 7, 1, 1, 3, 4, 9]}/>

        <ChartBubble data={data}/>

        <ChartL data={data_l}/>
        </body>
    </div>
  );
}

export default ChartApp;
