import React, { Component } from 'react';
import Pie from './Pie';
import * as d3 from 'd3';
import Tooltip from './Tooltip';
class ChartLine extends Component {
 
    render() {
   
      console.log(this.props.data)
        let width =600;
        let height =900;
        // let minViewportSize = Math.min(width, height);
        let radius = Math.min(width, height)/2 ;
        let x = width/2;
        let y = height/2 ;
        return (
         <div>
          <svg width='700' height='700' viewBox="0 0 600 900" >
            <Pie x={x} y={y} 
            radius={radius} 
       innerRadius={radius*0.4}
       outerRadius={radius}
       cornerRadius={7}
       padAngle={.02}
            data={this.props.data} />
          </svg>
         
          </div> 
        );
      }
    
}
export default ChartLine;