import React, { PureComponent } from "react";
import ChartApp from "./charts/ChartApp";
import Chart from "./charts/Chart";
import ChartLine from "./charts/ChartLine";
import ChartBubble from "./charts/ChartBubble";
import LineChartSideBar from "./charts/LineChartSideBar"
//modal wrapper for our popup
const defaultContainer = ({ children, classInStateInfo }) => (
  <div className={classInStateInfo}>{children}</div> //change
);

export default class StateInfo extends PureComponent {
  constructor() {
    super();
    this.state = {
      barChart: <Chart />, //barchart 
      // donutChart: <ChartLine />, //donut
      bubbleChart: <ChartBubble />, //
      currentChart: <LineChartSideBar />

    };
    this.changeChart = this.changeChart.bind(this);
  }
  changeChart() {
    this.setState({
      currentChart: <ChartBubble />
    });
  }
  render() {

    const { show, name, onClick, stateData} = this.props;
    console.log('-------=======>',this)
    const showHideClassName = show
      ? "state-info display-block"
      : "state-info display-none";

    const Container = this.props.containerComponent || defaultContainer;

    return (
      <Container classInStateInfo={showHideClassName}>
        {/* <div style={{position:'absolute', width:'10%'}}> */}
        <i className="fas fa-times fa-2x" onClick={onClick} />
        <h3>STATE {this.props.name}</h3>
        <h3>STATE DESCRIPTION</h3>
        {/* <button type="button" onClick={this.changeChart}>
          Change Chart1
        </button> */}
        {/* <div style={{ position: "relative", width: "10%" }}>
          <div style={{ position: "absolute", width: "10%" }}>
            {this.state.currentChart}
          </div>
        </div> */}
        {/* <Chart /> */}
        {/* <ChartBubble /> */}
        {/* <p>chart 1 </p>
        <p>chart 2</p>
        <p>chart 3</p>
        <p>chart 4</p>

        <p>chart 5</p> */}
        {/* <ChartApp className={showHideClassName}/> */}
        {/* </div> */}
        {/* <LineChartSideBar stateData={stateData}/> */}
      </Container>
    );
  }
}
