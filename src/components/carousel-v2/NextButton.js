import React, { Component } from "react";

class NextButton extends Component {
  render() {
    let { next, id } = this.props;
    return (
      <a
        id={id}
        title="next"
        className="nextButton dark-orange"
        onClick={next}
      />
    );
  }
}
export default NextButton;
