import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";

import { json as requestJson } from "d3-request";

const defaultContainer = ({ children }) => (
  <div className="navbar">{children}</div>
);

export default class ControlPanel extends PureComponent {
  render() {
    const Container = this.props.containerComponent || defaultContainer;
    const { settings } = this.props;

    return (
      <Container>
        <div style={{ display: "flex" }}>
          <Button style={{ color: "black" }}>Home</Button>
          <Button>National Stats</Button>
          <Button>Blog</Button>
          <Button>About</Button>
        </div>
      </Container>
    );
  }
}
