import React, {Component} from 'react'

export default class Legend extends Component {
    render() {
    const selectedData= this.props.selectedData
    console.log(selectedData)
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
<div><span style={{background: '#723122'}}></span></div>
<div><span style={{background: '#8B4225'}}></span></div>
<div><span style={{background: '#A25626'}}></span></div>
<div><span style={{background: '#B86B25'}}></span></div>
<div><span style={{background: '#CA8323'}}></span></div>
<div><span style={{background: '#DA9C20'}}></span></div>
<div><span style={{background: '#E6B71E'}}></span></div>
<div><span style={{background: '#EED322'}}></span></div>
<div><span style={{background: '#F2F12D'}}></span></div>
<div><h3>High</h3></div>
</div>
        )
    }
}