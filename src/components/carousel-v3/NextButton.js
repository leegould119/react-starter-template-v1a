import React, { Component } from "react";
class NextButton extends Component {
  render() {
    return <a className="nextButton" href="#" onClick={this.props.next} />;
  }
}
export default NextButton;
