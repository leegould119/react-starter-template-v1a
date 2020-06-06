import React, { Component } from "react";

class aButton extends Component {
  render() {
    let {
      link,
      classes,
      buttonTitle,
      target,
      buttonId,
      handleClick
    } = this.props;

    return (
      <a
        id={buttonId}
        href={link}
        // target={target ? target : "_parent"}
        className={classes}
        onClick={handleClick}
      >
        {buttonTitle}
      </a>
    );
  }
}

export default aButton;
