import React, { Component } from "react";

import DynamicCols from "./dynamicCols";

class Sections extends Component {
  render() {
    let { vals, backgroundColor, padding } = this.props;

    // console.log("vals : " + vals);

    let paddingLocal = padding ? padding : "";
    let backgroundColorLocal = backgroundColor ? backgroundColor : "";
    return (
      <section className={backgroundColorLocal + " " + paddingLocal}>
        <div className="container">
          <DynamicCols vals={vals} />
        </div>
      </section>
    );
  }
}

export default Sections;
