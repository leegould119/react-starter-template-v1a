import React, { Component } from "react";

class BackButton extends Component {
  render() {
    return <a className="backButton" href="#" onClick={this.props.prev} />;
  }
}
export default BackButton;
