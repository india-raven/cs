import React from 'react'
import AxisL from './AxisL'

export default ({ scales, margins, svgDimensions }) => {
    const { height, width } = svgDimensions
  
    const xProps = {
      orient: 'Bottom',
      scale: scales.xScale,
      translate: `translate(0, ${height - margins.bottom})`,
      tickSize: height - margins.top - margins.bottom,
    }
  
    const yProps = {
      orient: 'Left',
      scale: scales.yScale,
      translate: `translate(${margins.left}, 0)`,
      tickSize: width - margins.left - margins.right,
    }
  
    return (
      <g>
        <AxisL {...xProps} />
        <AxisL {...yProps} />
      </g>
    )
  }