import React, { Component } from 'react';
import Pie from './Pie';
import * as d3 from 'd3';
import ToolTipPie from './ToolTipPie';
class ChartLine extends Component {
  constructor(){
    super()
    this.state = {
      hoveredBar: null,
    };
  }
  
    render() {
      console.log('this in chartline', this)
      console.log(this.state)
        let width =600;
        let height =900;
        // let minViewportSize = Math.min(width, height);
        let radius = Math.min(width, height)/2 ;
        let x = width/2;
        let y = height/2 ;
        return (
         <div>
          <svg width='700' height='700' viewBox="0 0 600 900" >
            <Pie x={x} y={y} 
            radius={radius} 
            innerRadius={radius*0.4}
            outerRadius={radius}
            cornerRadius={7}
            padAngle={.02}
            data={this.props.data} 
            onMouseOverCallback={datum => this.setState({ hoveredBar: datum })}
            onMouseOutCallback={datum => this.setState({ hoveredBar: null })}
            />
          </svg>
          {this.state.hoveredBar ? (
      <ToolTipPie
        hoveredBar={this.state.hoveredBar}
        x={x}
        y={y}
      />
    ) : null}
          </div> 
        );
      }
    
}
export default ChartLine;