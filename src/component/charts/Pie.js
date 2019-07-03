import React, { Component } from 'react';
import *  as d3 from 'd3';
import Slice from './Slice'
class Pie extends React.Component {
    constructor(props) {
      super(props);
      this.colorScale = d3.schemeCategory10;
      this.renderSlice = this.renderSlice.bind(this);
    }
    renderSlice(value, i) {
        console.log(value)
        let {innerRadius, outerRadius, cornerRadius, padAngle} = this.props;
        return (
          <Slice key={i}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          cornerRadius={cornerRadius}
          padAngle={padAngle}
          value={value}
          label={value.data}
                 fill={this.colorScale[i]} />
        );
      }
    render() {
        console.log('--------', this)
      let {x, y, data} = this.props;
      let pie = d3.pie();
      return (
        <g transform={`translate(${x}, ${y})`}>
          {/* Render a slice for each data point */}
          {pie(data).map(this.renderSlice)}

        </g>
      );
    }
  
   
  }
  export default Pie