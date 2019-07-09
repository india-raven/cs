import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";

import { json as requestJson } from "d3-request";

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

    return (
      <Container>
        <div style={{ display: "flex" }}>
          <Button component={AdapterLink} to="/">
            Home
          </Button>
          <Button component={AdapterLink} to="/usa">
            National Stats
          </Button>
          <Button>Blog</Button>
          <Button>About</Button>
        </div>
      </Container>
    );
  }
}
