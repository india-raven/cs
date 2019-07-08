import React, { Component } from 'react'

export default class Slider extends Component {
    render () {
        return (
            <div>
                <input
                type="range"
                value={settings.year}
                min={1924}
                max={2018}
                step={1}
                onChange={evt => this.props.onChange('year', evt.target.value)}
                />
                <div className="sliderticks">
                    <p>1925</p>
                    <p>1934</p>
                    <p>1945</p>
                    <p>1955</p>
                    <p>1962</p>
                    <p>1971</p>
                    <p>1980</p>
                    <p>1990</p>
                    <p>2005</p>
                    <p>2008</p>
                    <p>2018</p>
                </div>
            </div>
        )
    }
}
