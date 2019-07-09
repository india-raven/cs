import React, {Component} from 'react'

export default class Legend extends Component {
    render() {
        return (
<div id='state-legend' class='legend'>
<div><h3>Hot</h3></div>
<div><span style={{background: '#723122'}}></span></div>
<div><span style={{background: '#8B4225'}}></span></div>
<div><span style={{background: '#A25626'}}></span></div>
<div><span style={{background: '#B86B25'}}></span></div>
<div><span style={{background: '#CA8323'}}></span></div>
<div><span style={{background: '#DA9C20'}}></span></div>
<div><span style={{background: '#E6B71E'}}></span></div>
<div><span style={{background: '#EED322'}}></span></div>
<div><span style={{background: '#F2F12D'}}></span></div>
<div><h3>Cold</h3></div>
</div>
        )
    }
}