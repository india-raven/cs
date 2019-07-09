import React, { PureComponent } from "react";
import JobBoard from "./component/JobBoard";
import Slider from "./component/Slider";

import { json as requestJson } from "d3-request";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

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
        <ExpansionPanel className="control-expand" width={2}>
          <ExpansionPanelSummary
            // className="control-expand-summary"
            expandIcon={<ExpandMoreIcon />}
            // aria-controls="panel1a-content"
            id="panel1a-header"
            // style={{ margin: "0px" }}
          >
            <h3 style={{ textAlign: "center", margin: "5px" }}>
              Control Panel
            </h3>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <div>
              <p style={{ margin: 0 }}>
                Annual state averages in <b>{settings.year}</b>. Hover over
                states for details!
              </p>
              <hr />
              <div key={"year"} className="input">
                <JobBoard show={this.state.show} handleClose={this.hideModal} />
                <button type="button" onClick={this.showModal}>
                  See nearby jobs
                </button>
                <form style={{ display: "flex", flexDirection: "column" }}>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <p style={{ flex: 3 }}>Select data to map:</p>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        flex: 1,
                        alignItems: "flex-end"
                      }}
                    >
                      <div
                        style={{ display: "flex", justifyContent: "flex-end" }}
                      >
                        <p className="datatype">Temperature</p>
                        <input
                          type="radio"
                          name="datatype"
                          value="Temperature"
                          className="data-radio"
                          checked={this.props.selectedData === "Temperature"}
                          onChange={() => {
                            this.props.updateSelectedData("Temperature");
                            requestJson(
                              "data/us-temp.geojson",
                              (error, response) => {
                                //WE USE CONVENIENT D3 LIBRARY TO REQUEST JSON
                                if (!error) {
                                  this.props.mapNewData(response); //IF THERE IS NO ERROR => INVOKE _LOADDATA AND PASS RESPONSE THERE
                                } else {
                                  console.log(
                                    "----------------------------------------"
                                  );
                                  console.error(error);
                                  console.log(
                                    "----------------------------------------"
                                  );
                                }
                              }
                            );
                          }}
                        />
                      </div>
                      <div
                        style={{ display: "flex", justifyContent: "flex-end" }}
                      >
                        <p className="datatype">PDSI</p>
                        <input
                          type="radio"
                          name="datatype"
                          value="PDSI"
                          className="data-radio"
                          checked={this.props.selectedData === "PDSI"}
                          onChange={() => {
                            this.props.updateSelectedData("PDSI");
                            requestJson(
                              "data/us-temp.geojson",
                              (error, response) => {
                                //WE USE CONVENIENT D3 LIBRARY TO REQUEST JSON
                                if (!error) {
                                  this.props.mapNewData(response); //IF THERE IS NO ERROR => INVOKE _LOADDATA AND PASS RESPONSE THERE
                                } else {
                                }
                              }
                            );
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </form>
                <Slider settings={settings} onChange={this.props.onChange} />
                <JobBoard show={this.state.show} handleClose={this.hideModal} />
              </div>
            </div>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </Container>
    );
  }
}
