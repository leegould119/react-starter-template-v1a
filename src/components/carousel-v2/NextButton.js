import React, { Component } from "react";

class NextButton extends Component {
  render() {
    let { next } = this.props;
    return <a title="next" className="nextButton dark-orange" onClick={next} />;
  }
}
export default NextButton;
