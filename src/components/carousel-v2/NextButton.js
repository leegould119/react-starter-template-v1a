import React, { Component } from "react";

class NextButton extends Component {
  render() {
    let { next } = this.props;
    return <a className="nextButton" href="#" onClick={next} />;
  }
}
export default NextButton;
