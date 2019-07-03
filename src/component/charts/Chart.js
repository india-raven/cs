import React, { Component } from "react";
import { scaleBand, scaleLinear } from "d3-scale";
import Axes from "./Axes";
// import data from './dataNew.json'
import data from "./d";
import Bars from "./Bar";
import Tooltip from "./Tooltip";

export default class Chart extends Component {
  constructor() {
    super();
    this.xScale = scaleBand();
    this.yScale = scaleLinear();

    this.state = {
      hoveredBar: null
    };
  }

  render() {
    console.log(this);
    const margins = { top: 10, right: 20, bottom: 50, left: 60 };
    const svgDimensions = { width: 400, height: 300 };

    const maxValue = Math.max(...data.map(d => d.value));
    const minValue = Math.min(...data.map(d => d.value));

    const xScale = this.xScale
      .padding(0.1)
      .domain(data.map(d => d.year.slice(2, 4) + "." + d.year.slice(4, 6)))
      .range([margins.left, svgDimensions.width - margins.right]);
    const yScale = this.yScale
      .domain([minValue, maxValue])
      .range([svgDimensions.height - margins.bottom, margins.top]);

    return (
      <div style={{ position: "fixed" }}>
        <svg
          viewBox={`0 0 ${svgDimensions.width +
            margins.left} ${svgDimensions.height + margins.bottom}`}
          preserveAspectRatio="xMinYMin meet"
          width={svgDimensions.width}
          height={svgDimensions.height}
        >
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
            onMouseOutCallback={datum => this.setState({ hoveredBar: null })}
            onMouseOverCallback={datum => this.setState({ hoveredBar: datum })}
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
