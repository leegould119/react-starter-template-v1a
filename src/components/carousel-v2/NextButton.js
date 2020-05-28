import React, { Component } from "react";

class NextButton extends Component {
  render() {
    let { next } = this.props;
    return <a className="nextButton dark-orange" href="#" onClick={next} />;
  }
}
export default NextButton;
