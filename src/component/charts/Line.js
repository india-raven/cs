import React, { Component } from 'react'
import { scaleLinear } from 'd3-scale'
import { interpolateLab } from 'd3-interpolate'
import * as d3 from "d3"

export default class Line extends Component {
    constructor(props) {
      super(props)
    //   this.state = {isHovered: false};
    //   this.onMouseOver = this.onMouseOver.bind(this);
    //   this.onMouseOut = this.onMouseOut.bind(this);
      this.colorScale = scaleLinear()
        .domain([this.props.minValue, this.props.maxValue])
        .range(['#d971bb', '#5142f5'])
     //   .interpolate([
          // "linear",
        // "step-before",
        // "step-after",
     //   "basis"
        // "basis-closed",
        // "cardinal",
        // "cardinal-closed"
     // ])
    // }
    // onMouseOver() {
    //   this.setState({isHovered: true});
    // }
  
    // onMouseOut() {
    //   this.setState({isHovered: false});
  }
    render() {
      console.log('>>>>>>',this)
      const { scales, margins, data, svgDimensions} = this.props
      const { xScale, yScale} = scales
      const { height } = svgDimensions
      let {x, y} = this.props;
      console.log('!!!!!!!!!!!!!',data)
    let line = d3.line()
    // .defined(d => !isNaN(d.y))
    // let pathData=line(data)
    
// d3.select('path').attr('d',pathData)
    .defined(d => !isNaN(d.y))
    .x(function(data) {console.log('xScale',data.x,xScale(data.x)); return xScale(data.x); })
            .y(function(data) { console.log('yScale',yScale(data.y));return yScale(data.y); })
            
    //   console.log('LINE',line)
    // let line = (
    //      data.map(datum =>
    //        <line
    //             // x={10}
    //             // y={10}
    //         key={datum.x}
    //         x={xScale(datum.x)}  
    //         y={yScale(datum.y)} 
    //         height={Math.abs(yScale(datum.y) - yScale(0))}
    //         width={xScale.bandwidth()}
    //         fill={this.colorScale(datum.y)}
           
            // onMouseOut={() => this.props.onMouseOutCallback(null)}
        //     onMouseOver={() => this.props.onMouseOverCallback(datum)}
            // onMouseMove={()=>this.props.onMouseMoveCallback({datum})}
            
        //   />

        //  ))
      let data_values=data.map(function(v){
          return v
      })
      console.log('LINEEEEE', line)
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
// <path d={line(data)
  // transform={`translate(${x}, ${y})`}
  //fill={this.colorScale(data.y)}