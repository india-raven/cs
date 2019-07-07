import React, { Component } from 'react';
import { scaleBand, scaleUtc, scaleLinear, scaleTime, scaleSequential} from 'd3-scale'
import * as d3 from 'd3';
// import data from './newJson'
import AxesL from './AxesL'
import Line from './Line'
class LineChartSideBar extends Component {
  constructor() {
    super()
    this.state={
      data:[]
    }
    this.xScale = scaleLinear()
    this.yScale = scaleLinear()
    this.changeViewData=this.changeViewData.bind(this)
}    
    
    changeViewData(){
      let arr=this.props.data.properties.temperature
      let years=Object.keys(arr)
      let values=Object.values(arr)
     let empty_arr=[]
     years.map(function(v){
       let obj={}
       obj['date']=v
       empty_arr.push(obj)
     })
     let dat=[]
     values.map(function(v,i){
            let n=empty_arr[i]
            n['y']=v
            dat.push(n)
     })
      this.setState=({
       data: dat
     })
    }
    
    render() {
        // console.log(this.changeViewData(this.props.data.properties.temperature))
        // console.log(this)
        let margins = {top: 20, right: 30, bottom: 30, left: 40}
        const svgDimensions = { width: 500, height: 400}
        const max = d3.max(this.setState.data, d => Math.abs(d.y))
        const min= d3.min(this.setState.data, d => Math.abs(d.y))
        // console.log(d3.extent(this.props.data, d => d.date))
        console.log(max)
        console.log(min)
        const xScale = this.xScale
                 .domain(d3.extent(this.setState.data, d => d.date))
                 .range([margins.left, svgDimensions.width -margins.right])
        const yScale = this.yScale
                 .domain([0, d3.max(this.setState.data, d => d.y)]).nice()
                 .range([svgDimensions.height - margins.bottom, margins.top])

        return (
          
          <svg  width={svgDimensions.width} height={svgDimensions.height}>
          <AxesL
          
    scales={{ xScale, yScale }}
    margins={margins}
    svgDimensions={svgDimensions}
  />
         <Line scales={{ xScale, yScale }}
   svgDimensions={svgDimensions}
   margins={margins}
   maxValue={max}
          minValue={min}
           data={this.setState.data} />
           </svg>
 
        );
      }
    
}
export default LineChartSideBar;