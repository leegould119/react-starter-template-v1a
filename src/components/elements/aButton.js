import React, { Component } from "react";

class aButton extends Component {
  handleClick = () => {
    console.log("button clicked");
  };
  render() {
    let { link, classes, buttonTitle } = this.props;

    return (
      <a href={link} className={classes} onClick={this.handleClick}>
        {buttonTitle}
      </a>
    );
  }
}

export default aButton;
