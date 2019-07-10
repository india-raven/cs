import React from 'react'
import './Tooltip.css'
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
export default ({hoveredBar, scales}) => {
    const { xScale, yScale } = scales
    const styles = {
      left: `${xScale(hoveredBar.date)}px`,
      top: `${yScale(hoveredBar.y)}px`
    }
    console.log('tooooool', hoveredBar)
    return (
      <div >
          <Paper  className="Tooltip" style={styles} >
              <tr ><b>{hoveredBar.date}</b></tr>
              <td >Temp: {hoveredBar.y}</td>
        </Paper>
        <rect width="130" height="15" style="fill: rgb(238, 238, 238); opacity: 0.8;"></rect>
        <text class="featText" dx="20" dy="30">408</text>
        <circle y={yScale(hoveredBar.y)} r="6" style="fill: rgb(255, 255, 255); stroke: rgb(0, 177, 81);"></circle>
      </div>
    )
  }