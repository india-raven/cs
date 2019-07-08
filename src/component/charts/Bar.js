import React, { Component } from 'react';
import { scaleLinear } from 'd3-scale';
import { interpolateLab } from 'd3-interpolate';
import * as d3 from 'd3';

export default class Bars extends Component {
  constructor(props) {
    super(props);
    this.state = { isHovered: false };
    this.onMouseOver = this.onMouseOver.bind(this);
    this.onMouseOut = this.onMouseOut.bind(this);
    this.colorScale = scaleLinear()
      .domain([this.props.minValue, this.props.maxValue])
      .range(['#b3e5fc', '#01579b'])
      .interpolate(interpolateLab);
  }
  onMouseOver() {
    this.setState({ isHovered: true });
  }

  onMouseOut() {
    this.setState({ isHovered: false });
  }

  render() {
    console.log('>>>>>>', this);
    const { scales, margins, data, svgDimensions, ...props } = this.props;
    const { xScale, yScale } = scales;
    const { height } = svgDimensions;

    const bars = data.map(datum => (
      <rect
        key={datum.year}
        x={xScale(datum.year.slice(2, 4) + '.' + datum.year.slice(4, 6))}
        y={yScale(Math.max(0, datum.value))}
        height={Math.abs(yScale(datum.value) - yScale(0))}
        width={xScale.bandwidth()}
        fill={this.colorScale(datum.value)}
        onMouseOver={() => this.props.onMouseOverCallback(datum)}
        onMouseOut={() => this.props.onMouseOutCallback(null)}
      />
    ));

    return (
      <g onMouseOver={this.onMouseOver} onMouseOut={this.onMouseOut} {...props}>
        {bars}
      </g>
    );
  }
}
