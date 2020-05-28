import React, { Component } from "react";

class BackButton extends Component {
  render() {
    let { prev } = this.props;
    return (
      <a title={"back"} className="backButton dark-orange" onClick={prev} />
    );
  }
}
export default BackButton;
