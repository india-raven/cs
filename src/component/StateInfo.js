import React, { PureComponent } from 'react';
import ChartApp from './charts/ChartApp'
import Chart from './charts/Chart'
import ChartLine from './charts/ChartLine'
import ChartBubble from './charts/ChartBubble'
//modal wrapper for our popup
const defaultContainer = ({ children, classInStateInfo }) => (
  <div className={classInStateInfo}>{children}</div> //change
);

export default class StateInfo extends PureComponent {
  constructor(){
    super()
    this.state={
      barChart: <Chart />,
      donutChart: <ChartLine />,
      bubbleChart: <ChartBubble />
    }
  }
  render() {
    const { show, name, onClick } = this.props;
    const showHideClassName = show
      ? 'state-info display-block'
      : 'state-info display-none';

    const Container = this.props.containerComponent || defaultContainer;

    return (
      <Container classInStateInfo={showHideClassName}>
        <i className="fas fa-times fa-2x" onClick={onClick} />
        <h3>STATE {this.props.name}</h3>
        <h3>STATE DESCRIPTION</h3>
        <div>
          {this.state.barChart}
        </div>
        <p>chart 1 </p>
        <p>chart 2</p>
        <p>chart 3</p>
        <p>chart 4</p>

        <p>chart 5</p>
        {/* <ChartApp className={showHideClassName}/> */}
      </Container>
    );
  }
}
