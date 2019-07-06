import React, { Component } from 'react';
import { scaleBand, scaleUtc, scaleLinear, scaleTime, scaleSequential} from 'd3-scale'
import * as d3 from 'd3';
// import data from './data_l'
import AxesL from './AxesL'
import Line from './Line'
class GraphLine extends Component {
  constructor() {
    super()
    
    this.xScale = scaleLinear()
    this.yScale = scaleLinear()
    
}
    render() {
      // console.log('=======>',this.props.data)
        let margins = {top: 20, right: 30, bottom: 30, left: 40}
        // return new Date(parseInt(d.Year),0)
        const svgDimensions = { width: 500, height: 400}
        const max = d3.max(this.props.data, d => Math.abs(d.y))
        const min= d3.min(this.props.data, d => Math.abs(d.y))
        console.log(d3.extent(this.props.data, d => d.date))
        const xScale = this.xScale
                 .domain(d3.extent(this.props.data, d => d.date))
                 .range([margins.left, svgDimensions.width -margins.right])
        const yScale = this.yScale
                 .domain([0, d3.max(this.props.data, d => d.y)]).nice()
                 .range([svgDimensions.height - margins.bottom, margins.top])

        return (
          
          <svg  width={svgDimensions.width} height={svgDimensions.height}>
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
           data={this.props.data} />
           </svg>
 
        );
      }
    
}
export default GraphLine;