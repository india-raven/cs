import React, { Component } from 'react';
import Pie from './Pie';
import * as d3 from 'd3';

class ChartLine extends Component {
    render() {
      console.log(this.props.data)
        let width = 400;
        let height =330;
        // let minViewportSize = Math.min(width, height);
        let radius = Math.min(width, height)/2 ;
        let x = width/2;
        let y = height/2 ;
        return (
          <svg width='950px' height='950px'>
            <Pie x={x} y={y} 
            radius={radius} 
       innerRadius={radius*0.4}
       outerRadius={radius}
       cornerRadius={7}
       padAngle={.02}
            data={this.props.data} />
          </svg>
        );
      }
    
}
export default ChartLine;