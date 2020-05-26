import React, { Component } from "react";

class BackButton extends Component {
  render() {
    let { prev } = this.props;
    return (
      <a href="#" onClick={prev}>
        Back
      </a>
    );
  }
}
export default BackButton;
