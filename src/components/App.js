import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";

// styles
import "../sass/main.scss";

// pages
import HomePage from "../pages/Home";
import Projects from "../pages/Projects";
import Gallery from "../pages/Gallery";

// components
import Navigation from "./common/navigation";

import history from "./common/history";
export default class componentName extends Component {
  render() {
    return (
      <React.Fragment>
        <Router history={history}>
          <Navigation />
          <Switch>
            <Route exact path="/" render={(props) => <HomePage {...props} />} />
            <Route
              path="/projects"
              render={(props) => <Projects {...props} />}
            />
            <Route path="/gallery" render={(props) => <Gallery {...props} />} />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}
