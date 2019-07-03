import React, { Component } from 'react';
import Pie from './Pie';
import * as d3 from 'd3';
class ChartLine extends Component {
    render() {
        let width = 500/3;
        console.log(width)
        let height =450/3;
        console.log(height)
        // let minViewportSize = Math.min(width, height);
         
        let radius = Math.min(width, height) / 2;

        let x = width / 2;
        let y = height / 2;
        console.log(this)
        return (

          <svg width="100%" height="100%">
            <Pie x={x} y={y} 
            radius={radius} 
            
       innerRadius={radius * .35}
       outerRadius={radius}
       cornerRadius={7}
       padAngle={.02}
            data={this.props.data} />
          </svg>
        );
      }
    
}
export default ChartLine;