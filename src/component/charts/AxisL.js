import React, { Component } from 'react'
import * as d3Axis from 'd3-axis'
import { select as d3Select } from 'd3-selection'
import * as d3 from 'd3';
import './Axis.css'

export default class Axis extends Component {
    componentDidMount() {
      this.renderAxis()
    }
  
    componentDidUpdate() {
      this.renderAxis()
    }
  
    renderAxis() {
      const axisType = `axis${this.props.orient}`
      console.log('axisType',axisType)
      console.log('')
      const axisl = d3Axis[axisType]()
        .scale(this.props.scale)
        // .tickSize(-this.props.tickSize)
        // .tickPadding([3])
        // .ticks([3])
        .tickValues([4])
        // .text()
      // const axisb = d3Axis.axisBottom()
      //    .scale(this.props.scale)
        //  .ticks([4])
      d3Select(this.axisElement).call(axisl)
      // d3Select(this.axisElement).call(axisb)
    }
  
    render() {
      
      return (
        <g
          className={`Axis Axis-${this.props.orient}`}
          ref={(el) => { this.axisElement = el; }}
          transform={this.props.translate}
        >
      
</g>
      )
    }
  }