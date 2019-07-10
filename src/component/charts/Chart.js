import React, { Component } from 'react';
import { scaleBand, scaleLinear } from 'd3-scale';
import Axes from './Axes';
// import data from './dataNew.json'

import data from './d';
import Bars from './Bar';
import Tooltip from './Tooltip';
import ResponsiveChart from './ResponsiveChart';
import * as d3 from 'd3';
class Chart extends Component {
  constructor() {
    super();
    this.xScale = scaleBand();
    this.yScale = scaleLinear();

    this.state = {
      hoveredBar: null,
    };
  }

  render() {
    // console.log(this)
    const margins = { top: 10, right: 15, bottom: 0, left: 15 };
    const svgDimensions = {
      width: Math.max(this.props.parentWidth, 1000),
      height: 400,
    };

    const maxValue = Math.max(...data.map(d => d.value));
    const minValue = Math.min(...data.map(d => d.value));

    const xScale = this.xScale
      .padding(0.1)
      .domain(data.map(d => d.year.slice(2, 4) + '.' + d.year.slice(4, 6)))
      .range([margins.left, svgDimensions.width - margins.right]);
    const yScale = this.yScale
      .domain([minValue, maxValue])
      .range([svgDimensions.height - margins.bottom, margins.top]);

    //  /* <svg  viewBox={`0 0 ${svgDimensions.width +
    //         margins.left} ${svgDimensions.height + margins.bottom}`} //THE PROBLEM IS HERE
    //       preserveAspectRatio="xMinYMin meet" */
    return (
      <div >
        <svg width={svgDimensions.width} height={svgDimensions.height}>
          <Axes
            scales={{ xScale, yScale }}
            margins={margins}
            svgDimensions={svgDimensions}
          />

          <Bars
            scales={{ xScale, yScale }}
            margins={margins}
            data={data}
            maxValue={maxValue}
            minValue={minValue}
            svgDimensions={svgDimensions}
            onMouseOverCallback={datum => this.setState({ hoveredBar: datum })}
            onMouseOutCallback={datum => this.setState({ hoveredBar: null })}
            // onMouseMoveCallback={datum=>this.setState({hoveredBar:datum})}
          />
        </svg>

        {this.state.hoveredBar ? (
          <Tooltip
            hoveredBar={this.state.hoveredBar}
            scales={{ xScale, yScale }}
          />
        ) : null}
      </div>
    );
  }
}
export default ResponsiveChart(Chart);
