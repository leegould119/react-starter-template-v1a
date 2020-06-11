import React, { Component } from "react";

class BackButton extends Component {
  render() {
    let { prev, id } = this.props;
    return (
      <a
        id={id}
        title={"back"}
        className="backButton dark-orange"
        onClick={prev}
      />
    );
  }
}
export default BackButton;
