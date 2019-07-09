import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Route, Switch, Redirect } from "react-router-dom";

import Map from "../Map";
import NewPage from "../component/totalInfo/newPage";

class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData();
  }

  render() {
    const { isLoggedIn } = this.props;

    return (
      <Switch>
        {/* Routes placed here are available to all visitors */}
        <Route exact path="/" component={Map} />
        <Route path="/usa" component={NewPage} />
        {/* <Route path="/blog" component={Blog} /> */}
        {/* <Route path="/about" component={About} /> */}
        <Redirect to="/" />
      </Switch>
    );
  }
}
