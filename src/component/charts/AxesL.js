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
        dy='8em'
        transform ="rotate(-90)"
        fill="black"
        text-anchor="end"
        font-size="10px"
        >
          {'parts-per-million (ppm)'}
        </text>
        <text
          y='4'
          dy="36em"
          dx='73em'
          transform ="rotate(0)"
          fill="black"
          text-anchor="start"
          font-size="10px"
        >
          {'Year (1960-2015)'}
        </text>
      </g>
  )
}