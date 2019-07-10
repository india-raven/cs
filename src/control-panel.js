import React, { PureComponent } from "react";
import JobBoard from "./component/JobBoard";
import Slider from "./component/Slider";
import Legend from "./component/Legend";

import { json as requestJson } from "d3-request";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const defaultContainer = ({ children }) => (
  <div className="control-panel">{children}</div>
);

export default class ControlPanel extends PureComponent {
  state = {
    show: false
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
        <ExpansionPanel width={2}>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            id="panel1a-header"
          >
            <h3 id="control-panel-title">Control Panel</h3>
          </ExpansionPanelSummary>
          <hr />
          <ExpansionPanelDetails>
            <div>
              <hr />
              <p id="control-panel-info">
                Annual state averages in <b>{settings.year}</b>. Hover over
                states for details!
              </p>
              <hr />
              <div key={"year"} className="input">
                <form>
                  <div className="form-content">
                    <p>Select data to map:</p>
                    <div className="input-with-text">
                      <div className="input-with-text-spec">
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
                      <div className="input-with-text-spec">
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
                {/* <hr /> */}
                <Slider settings={settings} onChange={this.props.onChange} />
                <hr />
                <div id="legend">
                  <Legend selectedData={this.props.selectedData} />
                </div>
                <JobBoard show={this.state.show} handleClose={this.hideModal} />
              </div>
            </div>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </Container>
    );
  }
}
