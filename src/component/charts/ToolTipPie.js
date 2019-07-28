import React from 'react'
import './Tooltip.css'
import Paper from '@material-ui/core/Paper';

export default ({hoveredBar, x,y, data }) => {
   
     const styles = {
       left: x,
       top: y
     }
    console.log('hoveredBar', hoveredBar)
    console.log('hoveredBar', x)
    console.log('isHovered', y)
    return (
        
      <div >
          {/* <rect width={100} height={50} x={20} y={-22} rx={4}  yx={4} fill="red"/> */}
          {/* <text /> */}
       
          <rect  className="Tooltip" style={styles} display='bock'>
          <tr>{data.label}</tr>
              {/* <td >Temp: {((hoveredBar.value*9/5)+32).toFixed(2) +'\u2109' +' | '+  hoveredBar.value +'\u2103'}</td> */}
         </rect>
             
      </div>
    )
  }