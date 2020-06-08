import React, { Component } from "react";

class aButton extends Component {
  handleClick = () => {
    console.log("button clicked");
  };
  render() {
    let { link, classes, buttonTitle, target, togglePanel, id } = this.props;

    return (
      <a
        id={id}
        href={link}
        target={target ? target : "_parent"}
        className={classes}
        onClick={togglePanel}
      >
        {buttonTitle}
      </a>
    );
  }
}

export default aButton;
