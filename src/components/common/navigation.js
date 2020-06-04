import React, { Component } from "react";
import { Link } from "react-router-dom";

class navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      path: ""
    };
  }

  componentDidMount = () => {
    this.setActiveStyle();
  };

  // UNSAFE_componentWillMount = () => {
  //   this.setActiveStyle();
  // };

  animateMenu = () => {
    this.setActiveStyle();
    this.setState({ open: !this.state.open });
  };

  setActiveStyle = () => {
    let currentUrl = window.location.pathname;
    console.log("current url : " + currentUrl);
    this.setState({ path: currentUrl });
  };

  render() {
    // this.setActiveStyle();

    let { open, path } = this.state;
    return (
      <header className="header">
        <div className="container">
          <div
            id="nav-icon"
            className={open ? "open" : "closed"}
            onClick={this.animateMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>

          <nav
            onClick={this.animateMenu}
            className={open ? "visible" : "hidden"}
          >
            {(() => {
              if (path === "/") {
                return (
                  <Link className="active" to="/">
                    <span className="home-icon" />
                    Home
                  </Link>
                );
              } else {
                return (
                  <Link to="/">
                    <span className="home-icon" />
                    Home
                  </Link>
                );
              }
            })()}

            {(() => {
              if (path === "/projects") {
                return (
                  <Link className="active" to="/projects">
                    <span className="projects-icon" />
                    Projects
                  </Link>
                );
              } else {
                return (
                  <Link to="/projects">
                    <span className="projects-icon" />
                    Projects
                  </Link>
                );
              }
            })()}

            {(() => {
              if (path === "/gallery") {
                return (
                  <Link className="active" to="/gallery">
                    <span className="gallery-icon" />
                    Gallery
                  </Link>
                );
              } else {
                return (
                  <Link to="/gallery">
                    <span className="gallery-icon" />
                    Gallery
                  </Link>
                );
              }
            })()}
          </nav>
        </div>
      </header>
    );
  }
}
export default navigation;
