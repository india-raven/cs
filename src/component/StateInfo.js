import React, { PureComponent } from "react";
import { Button } from "@material-ui/core";

import ChartApp from "./charts/ChartApp";
import Chart from "./charts/Chart";
import ChartLine from "./charts/ChartLine";
import ChartBubble from "./charts/ChartBubble";
import LineChartSideBar from "./charts/LineChartSideBar";
import LinePDChart from "./charts/LinePDChart";
import JobBoard from "./JobBoard";
//modal wrapper for our popup
const defaultContainer = ({ children, classInStateInfo }) => (
  <div className={classInStateInfo}>{children}</div> //change
);

export default class StateInfo extends PureComponent {
  constructor() {
    super();
    this.state = {
      show: false
    };
  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    const { show, name, onClick, stateData } = this.props;
    const showHideClassName = show
      ? "state-info display-block"
      : "state-info display-none";

    const Container = this.props.containerComponent || defaultContainer;

    return (
      <Container classInStateInfo={showHideClassName}>
        {/* <div style={{position:'absolute', width:'10%'}}> */}
        <i className="fas fa-times fa-2x" onClick={onClick} />
        <div className="state-info-title-and-btn">
          <h2>{name}</h2>
          <div id="jobs-btn">
            <Button type="button" variant="contained" onClick={this.showModal}>
              See climate jobs
            </Button>
          </div>
          <JobBoard show={this.state.show} handleClose={this.hideModal} />
        </div>
        <hr />
        <div>{"Average Temperature \u2109 (1895-2018)"}</div>
        <LineChartSideBar stateData={stateData.temperature} />
        <hr />
        <div>{"Average PDSI (1925-2018)"}</div>
        <LinePDChart stateData={stateData.pdsi} />
      </Container>
    );
  }
}
