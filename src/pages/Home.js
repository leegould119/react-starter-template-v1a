import React, { Component } from "react";

// layouts
import FourColumnsLayout from "../components/pageLayouts/fourColumnLayout";
import TwoColumnsLayout from "../components/pageLayouts/twoColumnLayout";
import ThreeColumnLayout from "../components/pageLayouts/threeColumnLayout";
// three col layout 50% 25% 25%
import ThreeColumnLayoutTwo from "../components/pageLayouts/threeColumnLayoutTwo";

// reusable h1
import HeaderTag from "../components/elements/headerTag";
class homePage extends Component {
  render() {
    return (
      <React.Fragment>
        <HeaderTag />
        <TwoColumnsLayout />
        <FourColumnsLayout />
        <ThreeColumnLayout />
        <FourColumnsLayout />
        <ThreeColumnLayoutTwo />
      </React.Fragment>
    );
  }
}
export default homePage;
