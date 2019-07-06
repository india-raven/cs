import React, { PureComponent } from "react";
import JobBoard from "./component/JobBoard";

import { json as requestJson } from "d3-request";

const defaultContainer = ({ children }) => (
  <div className="control-panel">{children}</div>
);

export default class ControlPanel extends PureComponent {
  // constructor() {
  //   super();
  //   this.state = {
  //     show: false
  //   };
  // }
  state = {
    show: false
    // selectedData: "temp"
  };

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

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
          <JobBoard show={this.state.show} handleClose={this.hideModal} />
          <button type="button" onClick={this.showModal}>
            See nearby jobs
          </button>
          <form style={{ display: "flex", "flex-direction": "column" }}>
            <p>Select data to map:</p>
            <div style={{ display: "flex" }}>
              <input
                type="radio"
                name="datatype"
                value="temp"
                checked={this.props.selectedData === "temp"}
                onChange={() => {
                  this.props.updateSelectedData("temp");
                  requestJson("data/us-temp.geojson", (error, response) => {
                    //WE USE CONVENIENT D3 LIBRARY TO REQUEST JSON
                    if (!error) {
                      this.props.mapNewData(response); //IF THERE IS NO ERROR => INVOKE _LOADDATA AND PASS RESPONSE THERE
                    } else {
                      console.log("----------------------------------------");
                      console.error(error);
                      console.log("----------------------------------------");
                    }
                  });
                }}
              />{" "}
              Temperature <br />
            </div>
            <div style={{ display: "flex" }}>
              <input
                type="radio"
                name="datatype"
                value="pdsi"
                checked={this.props.selectedData === "pdsi"}
                onChange={() => {
                  this.props.updateSelectedData("pdsi");
                  requestJson("data/us-temp.geojson", (error, response) => {
                    //WE USE CONVENIENT D3 LIBRARY TO REQUEST JSON
                    if (!error) {
                      this.props.mapNewData(response); //IF THERE IS NO ERROR => INVOKE _LOADDATA AND PASS RESPONSE THERE
                    } else {
                      console.log("----------------------------------------");
                      console.error(error);
                      console.log("----------------------------------------");
                    }
                  });
                }}
              />{" "}
              PDSI <br />
            </div>
          </form>
          <label>Year</label>
          {/* <input
            type="range"
            value={settings.year}
            min={1895}
            max={2018}
            step={1}
            onChange={evt => this.props.onChange("year", evt.target.value)}
          /> */}
          <input
            type="range"
            value={settings.year}
            min={1924}
            max={2018}
            step={1}
            onChange={evt => this.props.onChange("year", evt.target.value)}
          />
        </div>
      </Container>
    );
  }
}
