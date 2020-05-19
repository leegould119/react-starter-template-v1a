import React, { Component } from "react";

import FourColumnsLayout from "../components/pageLayouts/fourColumnLayout";
import TwoColumnsLayout from "../components/pageLayouts/twoColumnLayout";
import HeaderTag from "../components/elements/headerTag";
class projectsPage extends Component {
  render() {
    return (
      <React.Fragment>
        <HeaderTag />
        <FourColumnsLayout />
        <TwoColumnsLayout />
        <FourColumnsLayout />
        <TwoColumnsLayout />
      </React.Fragment>
    );
  }
}

export default projectsPage;
