import React from 'react'
import './Tooltip.css'
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
export default ({hoveredBar, scales}) => {
    const { xScale, yScale } = scales
    const styles = {
      left: `${xScale(hoveredBar.year.slice(2,4)+'.'+hoveredBar.year.slice(4,6))}px`,
      top: `${yScale(hoveredBar.value)}px`
    }
    console.log('------',hoveredBar.year.slice(0,4)+'/'+hoveredBar.year.slice(4,6))
    console.log('------',hoveredBar.value+'C')
    return (
      <div  >
          <Paper  className="Tooltip" style={styles} overlayStyle={{backgroundColor: 'transparent'}}>
          <Typography  variant="overline" display="block"  gutterBottom>
              <th colSpan="1">{hoveredBar.year.slice(0,4)+'/'+hoveredBar.year.slice(4,6)}</th>
              <td colSpan="1">Temperature: </td>
              <td colSpan="1">{hoveredBar.value +'\u2103'}</td>
        </Typography>
        </Paper>
      </div>
    )
  }