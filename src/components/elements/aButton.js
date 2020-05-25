import React, { Component } from "react";

class aButton extends Component {
  handleClick = () => {
    console.log("button clicked");
  };
  render() {
    let { link, classes, buttonTitle, target } = this.props;

    return (
      <a
        href={link}
        target={target ? target : "_parent"}
        className={classes}
        onClick={this.handleClick}
      >
        {buttonTitle}
      </a>
    );
  }
}

export default aButton;
