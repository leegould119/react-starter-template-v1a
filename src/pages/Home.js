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
  constructor(props) {
    super(props);
    this.state = {
      title: {
        value: "welcome to my portfolio website",
        color: "title-text"
      }
    };
  }

  render() {
    let { title } = this.state;
    // styles
    return (
      <React.Fragment>
        <HeaderTag title={title} />
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
