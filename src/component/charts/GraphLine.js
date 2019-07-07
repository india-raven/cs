import React, { Component } from 'react';
import { scaleBand, scaleUtc, scaleLinear, scaleTime, scaleSequential} from 'd3-scale'
import * as d3 from 'd3';
// import data from './data_l'
import AxesL from './AxesL'
import Line from './Line'
import data from './CO2'
class GraphLine extends Component {
  constructor() {
    super()
    
    this.xScale = scaleLinear()
    this.yScale = scaleLinear()
    
}    
    

    render() {
      console.log(data)
        let margins = {top: 20, right: 60, bottom: 30, left: 70}
        // return new Date(parseInt(d.Year),0)
        const svgDimensions = { width: 850, height: 400}
        const max = d3.max(data, d => Math.abs(d.y))
        const min= d3.min(data, d => Math.abs(d.y))
        console.log(d3.extent(data, d => d.date))
        const xScale = this.xScale
                 .domain(d3.extent(data, d => d.date))
                 .range([margins.left, svgDimensions.width -margins.right])
        const yScale = this.yScale
                 .domain([0, d3.max(data, d => d.y)]).nice()
                 .range([svgDimensions.height - margins.bottom, margins.top])

        return (
          
          <svg  width={svgDimensions.width+300} height={svgDimensions.height+50}>
          <AxesL
          
    scales={{ xScale, yScale }}
    margins={margins}
    svgDimensions={svgDimensions}
  />
         <Line scales={{ xScale, yScale }}
   svgDimensions={svgDimensions}
   margins={margins}
   maxValue={max}
          minValue={min}
           data={data} />
           </svg>
 
        );
      }
    
}
export default GraphLine;