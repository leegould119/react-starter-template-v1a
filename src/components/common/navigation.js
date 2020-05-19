import React, { Component } from "react";
import { Link } from "react-router-dom";

class navigation extends Component {
  render() {
    return (
      <header className="header">
        <div className="container">
          <nav>
            <Link to="/"> Home</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/gallery">Gallery</Link>
          </nav>
        </div>
      </header>
    );
  }
}
export default navigation;
