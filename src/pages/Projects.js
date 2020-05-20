import React, { Component } from "react";

import FourColumnsLayout from "../components/pageLayouts/fourColumnLayout";
import TwoColumnsLayout from "../components/pageLayouts/twoColumnLayout";
import HeaderTag from "../components/elements/headerTag";
class projectsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: {
        value: "our projects",
        color: "title-text"
      }
    };
  }
  render() {
    let { title } = this.state;
    return (
      <React.Fragment>
        <HeaderTag title={title} />
        <FourColumnsLayout />
        <TwoColumnsLayout />
        <FourColumnsLayout />
        <TwoColumnsLayout />
      </React.Fragment>
    );
  }
}

export default projectsPage;
