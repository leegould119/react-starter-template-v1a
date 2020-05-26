import React, { Component } from "react";

class NextButton extends Component {
  render() {
    let { next } = this.props;
    return (
      <a href="#" onClick={next}>
        Next
      </a>
    );
  }
}
export default NextButton;
