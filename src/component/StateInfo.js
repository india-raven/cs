import React, { PureComponent } from 'react';
import ChartApp from './charts/ChartApp';
import Chart from './charts/Chart';
import ChartLine from './charts/ChartLine';
import ChartBubble from './charts/ChartBubble';

import JobBoard from './JobBoard';
//modal wrapper for our popup
const defaultContainer = ({ children, classInStateInfo }) => (
  <div className={classInStateInfo}>{children}</div> //change
);

export default class StateInfo extends PureComponent {
  constructor() {
    super();
    this.state = {
      // show: false,
      barChart: <Chart />, //barchart
      // donutChart: <ChartLine />, //donut
      bubbleChart: <ChartBubble />, //
      currentChart: <Chart />,
    };
    this.changeChart = this.changeChart.bind(this);
  }
  changeChart() {
    this.setState({
      currentChart: <ChartBubble />,
    });
  }

  render() {
    const { show, name, onClick, stateData } = this.props;
    const showHideClassName = show
      ? 'state-info display-block'
      : 'state-info display-none';

    const Container = this.props.containerComponent || defaultContainer;

    return (
      <Container classInStateInfo={showHideClassName}>
        {/* <div style={{position:'absolute', width:'10%'}}> */}
        <i className="fas fa-times fa-2x" onClick={onClick} />
        <h3>STATE {name}</h3>
        <h3>STATE DESCRIPTION</h3>
        <Chart />
      </Container>
    );
  }
}
