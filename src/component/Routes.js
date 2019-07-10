import React, { Component } from "react";
import { withRouter, Route, Switch, Redirect } from "react-router-dom";

import Map from "../Map";
import NewPage from "../component/totalInfo/newPage";
import AboutUs from "./AboutUs"
export default class Routes extends Component {
  // componentDidMount() {
  //   this.props.loadInitialData();
  // }

  render() {
    const { isLoggedIn } = this.props;

    return (
      <Switch>
        {/* Routes placed here are available to all visitors */}
        <Route exact path="/" component={Map} />
        <Route path="/usa" component={NewPage} />
        <Route path="/about" component={AboutUs} />
        {/* <Route path="/blog" component={Blog} /> */}
        {/* <Route path="/about" component={About} /> */}
        <Redirect to="/" />
      </Switch>
    );
  }
}
