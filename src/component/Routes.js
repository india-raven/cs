import React, { Component } from "react";
import { withRouter, Route, Switch, Redirect } from "react-router-dom";
import ArticleV from './Blog/ArticleV'
import Map from "../Map";
import NewPage from "../component/totalInfo/newPage";

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
        <Route path='/blog' component={ArticleV} />
        {/* <Route  path="/blog/:id(\d+)" component={SingleArticle} /> */}
        {/* <Route path="/blog" component={Blog} /> */}
        {/* <Route path="/about" component={About} /> */}
        <Redirect to="/" />
      </Switch>
    );
  }
}
