import React, { Component } from 'react'
import { scaleLinear } from 'd3-scale'
import { interpolateLab } from 'd3-interpolate'
import * as d3 from "d3"

export default class Line extends Component {
    constructor(props) {
      super(props)
      this.colorScale = scaleLinear()
        .domain([this.props.minValue, this.props.maxValue])
        .range(['#d971bb', '#5142f5'])
  }
    render() {
      console.log('>>>>>>',this)
      const { scales, margins, data, svgDimensions} = this.props
      const { xScale, yScale} = scales
      const { height } = svgDimensions
      let {x, y} = this.props;

    let line = d3.line()
    .defined(d => !isNaN(d.y))
    .x(d => xScale(d.date))
    .y(d => yScale(d.y))
      return (
        <g  >
             <path d={line(data)}
              fill={"none"}
              stroke={"steelblue"}
              stroke-width={'1.5'} 
              stroke-linejoin= {"round"}
              stroke-linecap= {"round"}
            
             />
       </g>
      )
    }
  }