import React, { PureComponent } from 'react';
import Button from './component/totalInfo/button'
import AnotherComponent from './component/totalInfo/newPage'
const defaultContainer = ({ children }) => (
  <div className="control-info">{children}</div>
);

export default class ControlInfo extends PureComponent {
    constructor(props) {
        super(props)
        this.state = { isEmptyState: true,
            show: false }
      }
    
      triggerAddComponent = () => {
        this.setState({
          ...this.state,
          isEmptyState: false,
          isAddINFO: true,
        //   show: false
        })
      }
//   state = { show: false };

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
        <button>
  
       {/* <Button addComponent={this.triggerAddComponent} /> */}
      {this.state.isEmptyState && <Button addComponent={this.triggerAddComponent} />}

      {this.state.isAddINFO && <AnotherComponent />}
    
    </button>
    );
  }
}