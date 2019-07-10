import React, { Component } from 'react';

export default class Slider extends Component {
  render() {
    return (
      <div>
        <input
          type="range"
          className="slider"
          value={this.props.settings.year}
          min={1925}
          max={2018}
          step={1}
          onChange={evt => this.props.onChange('year', evt.target.value)}
        />
        <div className="sliderticks">
          <p>1925</p>
          {/* <p>1934</p> */}
          <p>1943</p>
          {/* <p>1952</p> */}
          <p>1962</p>
          {/* <p>1971</p> */}
          <p>1981</p>
          {/* <p>1990</p> */}
          <p>1999</p>
          {/* <p>2009</p> */}
          <p>2018</p>
        </div>
      </div>
    );
  }
}
