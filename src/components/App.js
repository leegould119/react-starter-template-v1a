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
import DetectScreenDimensions from "../utils/detectScreenDimension";

export default class componentName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screenWidth: null,
      generalStyles: {
        fontColors: {
          lightOrange: "light-orange-color",
          darkOrange: "dark-orange-color",
          darkGrey: "dark-grey-color",
          white: "white"
        },
        backgroundColorOptions: {
          lightOrange: "light-orange",
          darkOrange: "dark-orange",
          darkGrey: " dark-grey",
          lightGrey: " dark-grey"
        },
        paddingTopBottom: "padding-top-bottom"
      }
    };
  }

  render() {
    let { generalStyles, screenWidth } = this.state;
    console.log("screen width : " + screenWidth);
    return (
      <React.Fragment>
        <Router history={history}>
          <Navigation />
          {/* <DetectScreenDimensions /> */}
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => (
                <HomePage generalStyles={generalStyles} {...props} />
              )}
            />
            <Route
              path="/projects"
              render={(props) => (
                <Projects generalStyles={generalStyles} {...props} />
              )}
            />
            <Route
              path="/gallery"
              render={(props) => (
                <Gallery generalStyles={generalStyles} {...props} />
              )}
            />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}
