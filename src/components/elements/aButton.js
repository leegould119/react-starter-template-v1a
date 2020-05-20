import React, { Component } from "react";

class aButton extends Component {
  render() {
    let { classes, hrefs, title } = this.props;

    return (
      <React.Fragment>
        <a className={classes} href={hrefs}>
          {title}
        </a>
      </React.Fragment>
    );
  }
}

export default aButton;
