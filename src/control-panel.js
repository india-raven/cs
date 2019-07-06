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
        <div className="ctrl-panel">
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
            <form style={{ display: "flex", flexDirection: "column" }}>
              <p>Select data to map:</p>
              <div style={{ display: "flex" }}>
                <input
                  type="radio"
                  name="datatype"
                  value="Temperature"
                  checked={this.props.selectedData === "Temperature"}
                  onChange={() => {
                    this.props.updateSelectedData("PDSI");
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
                  value="PDSI"
                  checked={this.props.selectedData === "PDSI"}
                  onChange={() => {
                    this.props.updateSelectedData("PDSI");
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
              <div className="tick-2018">
                <p>2018</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    );
  }
}
