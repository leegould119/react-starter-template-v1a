import React, { Component } from "react";

import DynamicCols from "./dynamicCols";

class Sections extends Component {
  render() {
    let { vals } = this.props;
    console.log("vals : " + vals);
    return (
      <section className="container">
        <DynamicCols vals={vals} />
      </section>
    );
  }
}

export default Sections;
