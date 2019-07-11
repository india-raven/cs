import React, { Component } from 'react';
import * as d3 from 'd3';
import ToolTipPie from './ToolTipPie';
import Tooltip from './Tooltip';
class Slice extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isHovered: false };
    this.onMouseOver = this.onMouseOver.bind(this);
    this.onMouseOut = this.onMouseOut.bind(this);
  }

  onMouseOver() {
    this.setState({ isHovered: true });
  }

  onMouseOut() {
    this.setState({ isHovered: false });
  }
  render() {

    let {
      value,
      label,
      fill,
      innerRadius = 0,
      outerRadius,
      cornerRadius,
      padAngle,
      ...props
    } = this.props;
    if (this.state.isHovered) {
      outerRadius *= 1.05;
   
    }
    let arc = d3
      .arc()
      .innerRadius(innerRadius)
      .outerRadius(outerRadius)
      .cornerRadius(cornerRadius)
      .padAngle(padAngle);
      console.log(this.props)
    return (
      <g onMouseOver={this.onMouseOver} onMouseOut={this.onMouseOut} {...props}>
        <path d={arc(this.props.value)} fill={fill} />
        <text
          transform={`translate(${arc.centroid(this.props.value)})`}
          dy=".35em"
          textAnchor="middle"
          fill="black"
          font-size="20px"
        >
          {this.props.label}
        </text>
        {/* {this.state.isHovered ? (
      
         ):null} */}
    
      </g>
    );
  }
}

export default Slice;
