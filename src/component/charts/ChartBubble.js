import React, { Component } from 'react';
import { scaleBand, scaleLinear, scaleSequential} from 'd3-scale'
import AxesBubble from './AxesBubble'
import data from './data'
import * as d3 from 'd3';
import Bubble from './Bubble'
export default class ChartBubble extends React.Component{
    constructor() {
        super()
        this.xScale = scaleBand()
        this.yScale = scaleLinear()
        this.zScale = scaleSequential()
    }
        render(){
            const margins = ({top: 5, right: 5, bottom: 5, left: 10})
            const svgDimensions = { width: 500, height: 300}
            const max = d3.max(data, d => Math.abs(d.value))
            const min= d3.min(data, d => Math.abs(d.value))
            const xScale = this.xScale
                 .domain(data.map(d => d.date) )
                 .range([margins.left, svgDimensions.width -margins.right])
            const yScale = this.yScale
                 .domain(d3.extent(data, d => d.value)).nice()
                 .range([svgDimensions.height - margins.bottom, margins.top])
            const zScale = this.zScale
                 .domain([max,-max])
            console.log(Bubble)
           
          return(
              
            <svg width={svgDimensions.width} height={svgDimensions.height}>
                <AxesBubble
          scales={{ xScale, yScale }}
          margins={margins}
          svgDimensions={svgDimensions}
        />

        <Bubble  
          scales={{ xScale, yScale, zScale }}
          margins={margins}
          data={data}
          maxValue={max}
          minValue={min}
          svgDimensions={svgDimensions}
        //   onMouseOutCallback={datum => this.setState({hoveredBar: null})}
        //   onMouseOverCallback={datum => this.setState({hoveredBar: datum})}
          // onMouseMoveCallback={datum=>this.setState({hoveredBar:datum})}
          
        />
              
            </svg>
          )
    }
}