import React, { Component } from "react";
import { withRouter, Route, Switch, Redirect } from "react-router-dom";
import ArticleV from './Blog/ArticleV'
import Map from "../Map";
import NewPage from "../component/totalInfo/newPage";
import AboutUs from "./AboutUs";
import SingleArticle from  './Blog/SingleArticle';

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
        <Route exact  path="/blog/:id(\d+)" component={SingleArticle} />
        <Route path='/blog' component={ArticleV} />
        
        <Route path="/about" component={AboutUs} />
        {/* <Route path="/blog" component={Blog} /> */}
        {/* <Route path="/about" component={About} /> */}
        <Redirect to="/" />
      </Switch>
    );
  }
}
