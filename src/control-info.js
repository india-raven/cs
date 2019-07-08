import React, { PureComponent } from 'react';
import NewPage from './component/totalInfo/newPage';
import Fab from '@material-ui/core/Fab';
import IconButton from '@material-ui/core/IconButton';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
//modal wrapper for our popup
const defaultContainer = ({ children, classInStateInfo }) => (
  <div className={classInStateInfo}>{children}</div> //change
);

export default class StateInfo extends PureComponent {
  constructor() {
    super();
    this.state = {};
    // this.changeChart = this.changeChart.bind(this);
  }
  // changeChart() {
  //   this.setState({
  //     currentChart: <ChartBubble />
  //   });
  // }
  render() {
    const { show, onClick } = this.props;
    const showHideClassName = show
      ? ' usaInfo display-block'
      : ' usaInfo display-none';
    const Container = this.props.containerComponent || defaultContainer;
    return (
      <Container classInStateInfo={showHideClassName}>
        {/* <div style={{position:'absolute', width:'10%'}}> */}

        <i className="fas fa-times fa-3x" onClick={onClick} />
        <NewPage />
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
      </Container>
    );
  }
}
