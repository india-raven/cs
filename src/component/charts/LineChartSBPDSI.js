import React, { Component } from 'react';
import { scaleBand, scaleUtc, scaleLinear, scaleTime, scaleSequential} from 'd3-scale'
import * as d3 from 'd3';
// import data from './newJson'
import AxesL from './AxesPDSI'
import Line from './Line'
class LineChartSBPDSI extends Component {
  constructor() {
    super()
    // this.state={
    //   data:[]
    // }
    this.xScale =scaleLinear()
    this.yScale = scaleLinear()
    // this.changeViewData=this.changeViewData.bind(this)
}    
    
    // changeViewData(arr){
    // let years=Object.keys(arr)
    // let values=Object.values(arr)
    
    //   console.log(values)
    //  let empty_arr=[]
    //  years.map(function(v){
    //    let obj={}
    //    obj['date']=v
    //    empty_arr.push(obj)
    //  })
    //  let dat=[]
    //  values.map(function(v,i){
    //         let n=empty_arr[i]
    //         n['y']=v
    //         dat.push(n)
    //  })
    //   this.setState=({
    //    data: dat
    //  })
    // }
    convertObjToArr = obj => {
        if (obj) {
          let objKeys = Object.keys(obj);
          return objKeys.map(key => {
            let newObj = {};
            newObj.date = key;
            newObj.y = obj[key];
            return newObj;
          });
        }
      };
    
    render() {
        let data = this.props.stateData;

    if (data) {
      data = JSON.parse(data);
      data = this.convertObjToArr(data);
      console.log("=======>", data);
        let margins = {top: 10, right: 5, bottom: 40, left: 25}
        const svgDimensions = { width: 500, height:300}
        const max = d3.max(data, d => Math.abs(d.y))
        const min= d3.min(data, d => Math.abs(d.y))
        // console.log(d3.extent(this.props.data, d => d.date))
        console.log(max)
        console.log(min)
        const xScale = this.xScale
                 .domain(d3.extent(data, d =>{return d.date}))
                 
                 .range([margins.left, svgDimensions.width -margins.right])
        const yScale = this.yScale
                 .domain([min, d3.max(data, d => d.y)]).nice()
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
           data={data} />
        
           </svg>
           
        );
    } else {
        return <div />;
      }
      }
    
}
export default LineChartSBPDSI;