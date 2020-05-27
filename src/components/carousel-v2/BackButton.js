import React, { Component } from "react";

class BackButton extends Component {
  render() {
    let { prev } = this.props;
    return <a className="backButton" href="#" onClick={prev} />;
  }
}
export default BackButton;
