import React, { PureComponent } from 'react';

//modal wrapper for our popup
const defaultContainer = ({ children, classInStateInfo }) => (
  <div className={classInStateInfo}>{children}</div> //change
);

export default class StateInfo extends PureComponent {
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
        <p>chart 1</p>
        <p>chart 2</p>
        <p>chart 3</p>
        <p>chart 4</p>
        <p>chart 5</p>
      </Container>
    );
  }
}
