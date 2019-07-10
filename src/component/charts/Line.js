import React, { Component } from 'react';
import { scaleLinear } from 'd3-scale';
import { interpolateLab } from 'd3-interpolate';
import * as d3 from 'd3';
import ToolTipLine from './ToolTipLine';
export default class Line extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovered: false,
    };
    this.onMouseOver = this.onMouseOver.bind(this);
    this.onMouseOut = this.onMouseOut.bind(this);
    // this.onMouseMove =this.onMouseMove.bind(this)
    this.colorScale = scaleLinear()
      .domain([this.props.minValue, this.props.maxValue])
      .range(['#d971bb', '#5142f5']);
  }
  onMouseOver() {
    console.log('mouse over');
    this.setState({ isHovered: true });
  }

  onMouseOut() {
    console.log('mouse  out');
    this.setState({ isHovered: false });
  }

  render() {
    console.log('>>>>>>', this);
    const { scales, margins, data, svgDimensions, ...props } = this.props;
    const { xScale, yScale } = scales;
    const { height, width } = svgDimensions;
    // let { x, y } = this.props;

    let line = d3
      .line()
      .defined(d => !isNaN(d.y))
      .x(d => xScale(d.date))
      .y(d => yScale(d.y));

    return (
      <g onMouseOver={this.onMouseOver} onMouseOut={this.onMouseOut} {...props}>
        <path
          d={line(data)}
          fill={'none'}
          stroke={'steelblue'}
          stroke-width={'1.5'}
          stroke-linejoin={'round'}
          stroke-linecap={'round'}
        />
        {this.state.isHovered ? (
          // <Focus

          //   hoveredBar={this.state.hoveredBar}
          //   scales={{ xScale, yScale }}
          // />
          <g>
            {/* <line class="x" y1="0" style="stroke: rgb(85, 85, 85); stroke-dasharray: 3, 3; opacity: 0.5;" transform="translate(777.6689829437777,9.514767932489471)"></line> */}
            {/* <line class="y" x1="1647.6689829437778"  style="stroke: rgb(85, 85, 85); stroke-dasharray: 3, 3; opacity: 0.5;" transform="translate(-870,9.514767932489471)"></line> */}
            {/* <rect
               width= '100'
               height= '100'
               fill='rgb(255, 0, 0)'

               /> */}
            {/* <line
              x={xScale(data.date)}
              stroke="#555555"
              strokeDasharray={3}
              opacity="0.5"
              y1="0"
              y2={height}
            />
            <line
              y={xScale(data.y)}
              strokeDasharray={3}
              stroke={'#555555'}
              opacity="0.5"
              x1={width}
              x2={width / 2}
            /> */}
            {/* <ToolTipLine data/>  */}
          </g>
        ) : null}
      </g>
    );
  }
}
