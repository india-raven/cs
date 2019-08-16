import React from 'react';
import Axis from './Axis';

export default ({ scales, margins, svgDimensions }) => {
  const { height, width } = svgDimensions;
  const xProps = {
    orient: 'Bottom',
    scale: scales.xScale,
    translate: `translate(0, ${height - margins.bottom})`,
    tickSize: height - margins.top - margins.bottom,
  };
  const yProps = {
    orient: 'Left',
    scale: scales.yScale,
    translate: `translate(${margins.left}, 0)`,
    tickSize: width - margins.left - margins.right,   
  };
  return (
    <g>
      <Axis {...xProps} />
      <Axis {...yProps} />
      <text
          y='25'
          dy="0.5em"
          transform ="rotate(-90)"
          fill="black"
          text-anchor="end"
          font-size="10px"
        >
          {'Temperature \u2103'}
      </text>
      <text
          y='4'
          dy="29em"
          dx='2em'
          transform ="rotate(0)"
          fill="black"
          text-anchor="start"
          font-size="10px"
        >
          {'Year/month (2010-2019)'}
      </text>
    </g>
  );
};
