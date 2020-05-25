import React, { Component } from "react";

import DynamicCols from "./dynamicCols";

class Sections extends Component {
  render() {
    let { vals, backgroundColor, padding } = this.props;

    console.log("vals : " + vals);

    return (
      <section className={backgroundColor ? backgroundColor : ""}>
        <div className="container">
          <DynamicCols vals={vals} />
        </div>
      </section>
    );
  }
}

export default Sections;
