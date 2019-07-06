import React, { Component } from 'react'
import { scaleLinear } from 'd3-scale'
import { interpolateLab } from 'd3-interpolate'
import * as d3 from "d3"

export default class Bubble extends Component {
    constructor(props) {
      super(props)
    //   this.state = {isHovered: false};
    //   this.onMouseOver = this.onMouseOver.bind(this);
    //   this.onMouseOut = this.onMouseOut.bind(this);
      this.colorScale = scaleLinear()
        .domain([this.props.minValue, this.props.maxValue])
        .range(['#d971bb', '#5142f5'])
        .interpolate(interpolateLab)
    // }
    // onMouseOver() {
    //   this.setState({isHovered: true});
    // }
  
    // onMouseOut() {
    //   this.setState({isHovered: false});
  }
    render() {
      console.log('>>>>>>',this)
      const { scales, margins, data, svgDimensions, ...props } = this.props
      const { xScale, yScale, zScale} = scales
      const { height } = svgDimensions
     
       const bubble = (
         data.map(datum =>
           <circle
                // x={10}
                // y={10}
            key={datum.year}
            cx={xScale(datum.date)}  
            cy={yScale(datum.value)}
            cz={zScale(this.colorScale(datum.value))}
            r='2.5'
    //         height={Math.abs(yScale(datum.value) - yScale(0))}
    //         width={xScale.bandwidth()}
            fill={this.colorScale(datum.value)}
    //         onMouseOut={() => this.props.onMouseOutCallback(null)}

    //     //     onMouseOver={() => this.props.onMouseOverCallback(datum)}
    //         // onMouseMove={()=>this.props.onMouseMoveCallback({datum})}
            
          />
         )
    )
      
      
      return (
        <g onMouseOver={this.onMouseOver}
        onMouseOut={this.onMouseOut}
        {...props}>{bubble}</g>
      )
    }
  }