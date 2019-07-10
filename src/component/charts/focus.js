import React from 'react'
import ToolTipLine from './ToolTipLine'
export default class Focus extends React.Component {
     render(){
         
         return(
             <g>
                 <line class="x" y1="0" style="stroke: rgb(85, 85, 85); stroke-dasharray: 3, 3; opacity: 0.5;" transform="translate(777.6689829437777,9.514767932489471)"></line>
                 <line class="y" x1="1647.6689829437778"  style="stroke: rgb(85, 85, 85); stroke-dasharray: 3, 3; opacity: 0.5;" transform="translate(-870,9.514767932489471)"></line>
                 <ToolTipLine />
             </g>
             )
     }

}
