import React, {Component} from 'react'

export default class Legend extends Component {
    render() {
    const selectedData= this.props.selectedData
        return (
            selectedData === 'Temperature' ?
<div id='state-legend' class='legend'>
<div><h3>Hot</h3></div>
<div><span style={{background: '#FF2800'}}></span></div>
<div><span style={{background: '#FF7800'}}></span></div>
<div><span style={{background: '#FFA000'}}></span></div>
<div><span style={{background: '#FFC800'}}></span></div>
<div><span style={{background: '#FFF000'}}></span></div>
<div><span style={{background: '#b0FF00'}}></span></div>
<div><span style={{background: '#00ff10'}}></span></div>
<div><span style={{background: '#00FFD0'}}></span></div>
<div><span style={{background: '#00C4FF'}}></span></div>
<div><span style={{background: '#0064FF'}}></span></div>
<div><h3>Cold</h3></div>
</div> : <div id='state-legend' class='legend'>
<div><h3>Low</h3></div>
<div><span style={{background: '#FF4633'}}></span></div>
<div><span style={{background: '#FF8333'}}></span></div>
<div><span style={{background: '#FFA533'}}></span></div>
<div><span style={{background: '#FFB533'}}></span></div>
<div><span style={{background: '#FFB533'}}></span></div>
<div><span style={{background: '#FFDD33'}}></span></div>
<div><span style={{background: '#FFF633'}}></span></div>
<div><span style={{background: '#ECFF33'}}></span></div>
<div><span style={{background: '#CEFF33'}}></span></div>
<div><span style={{background: '#9FFF33'}}></span></div>
<div><h3>High</h3></div>
</div>
        )
    }
}