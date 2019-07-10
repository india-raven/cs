import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { json as requestJson } from 'd3-request';

const defaultContainer = ({ children }) => (
  <div className="navbar">{children}</div>
);

const AdapterLink = React.forwardRef((props, ref) => (
  <Link innerRef={ref} {...props} />
));

export default class ControlPanel extends PureComponent {
  render() {
    const Container = this.props.containerComponent || defaultContainer;
    const { settings } = this.props;
    const logo = require('../VisualClimate_logo.png');

    return (
      <Container>
        <div style={{ display: 'flex' }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              flex: 2,
              width: 'auto',
            }}
          >
            <Button component={AdapterLink} to="/">
              Home
            </Button>
            {/* <Button component={AdapterLink} to="/usa">
              National Stats
            </Button> */}
            <Button component={AdapterLink} to="/blog">
              Blog
            </Button>
            <Button component={AdapterLink} to="/about">
              About
            </Button>
          </div>
          <hr style={{ margin: '1px' }} />
          <div style={{ display: 'flex', justifyContent: 'center', flex: 1 }}>
            <img
              src={logo}
              alt="VisualClimate logo"
              style={{ maxWidth: '80%' }}
            />
          </div>
        </div>
      </Container>
    );
  }
}
