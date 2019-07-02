import React, { PureComponent } from "react";
import JobBoard from "./component/JobBoard";

const defaultContainer = ({ children }) => (
  <div className="control-panel">{children}</div>
);

export default class ControlPanel extends PureComponent {
  render() {
    const Container = this.props.containerComponent || defaultContainer;
    const { settings } = this.props;

    return (
      <Container>
        <h3>Annual Average Temperature</h3>
        <p>
          Map showing annual average by state in year <b>{settings.year}</b>.
          Hover over a state to see details.
        </p>
        {/* <p>
          Data source: <a href="www.census.gov">US Census Bureau</a>
        </p> */}

        <hr />

        <div key={"year"} className="input">
          <JobBoard />
          <label>Year</label>
          <input
            type="range"
            value={settings.year}
            min={1995}
            max={2018}
            step={1}
            onChange={evt => this.props.onChange("year", evt.target.value)}
          />
        </div>
      </Container>
    );
  }
}
