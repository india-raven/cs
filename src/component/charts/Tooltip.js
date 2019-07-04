import React from 'react'
import './Tooltip.css'
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
export default ({hoveredBar, scales}) => {
    const { xScale, yScale } = scales
    const styles = {
      left: `${xScale(hoveredBar.year.slice(2,4)+'.'+hoveredBar.year.slice(4,6))}px`,
      top: `${yScale(hoveredBar.value)}px`
    }
    return (
      <div >
          <Paper  className="Tooltip" style={styles} >
              <tr ><b>{hoveredBar.year.slice(0,4)+'/'+hoveredBar.year.slice(4,6)}</b></tr>
              <td >Temp: {((hoveredBar.value*9/5)+32).toFixed(2) +'\u2109' +' | '+  hoveredBar.value +'\u2103'}</td>
        </Paper>
      </div>
    )
  }