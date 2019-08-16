import React from 'react'
import Axis from './AxisL'

export default ({ scales, margins, svgDimensions }) => {
    const { height, width } = svgDimensions
  
    const xProps = {
      orient: 'Bottom',
      scale: scales.xScale,
      translate: `translate(0, ${height - margins.bottom})`,
      // tickSize: height - margins.top - margins.bottom,
    }
  
    const yProps = {
      orient: 'Left',
      scale: scales.yScale,
      translate: `translate(${margins.left}, 0)`,
      tickSize: width - margins.left - margins.right,
     
    }
    return (
      <g>
        <Axis {...xProps} />
        <Axis {...yProps} />
        <text
        y='6'
        dy='3em'
        transform ="rotate(-90)"
        fill="black"
        text-anchor="end"
        font-size="10px"
        >
          {'Temperature \u2109'}
        </text>
        <text
          y='4'
          dy="25em"
          dx='42em'
          transform ="rotate(0)"
          fill="black"
          text-anchor="start"
          font-size="10px"
        >
          {'Year (1925-2018)'}
        </text>
      </g>
    )
  }