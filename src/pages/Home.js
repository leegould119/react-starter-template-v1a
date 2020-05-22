import React, { Component } from "react";

// layouts
import FourColumnsLayout from "../components/pageLayouts/fourColumnLayout";
import TwoColumnsLayout from "../components/pageLayouts/twoColumnLayout";
import ThreeColumnLayout from "../components/pageLayouts/threeColumnLayout";
// three col layout 50% 25% 25%
import ThreeColumnLayoutTwo from "../components/pageLayouts/threeColumnLayoutTwo";

// reusable h1
import HeaderTag from "../components/elements/headerTag";
import twoColumnLayout from "../components/pageLayouts/twoColumnLayout";
class homePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: {
        value: "welcome to my portfolio website",
        color: "title-text"
      },
      generalStyleOptions: {
        fontColors: {
          lightOrange: "light-orange-color",
          darkOrange: "dark-orange-color",
          darkGrey: "dark-grey-color",
          white: "white"
        },
        backgroundColorOptions: {
          lightOrange: "light-orange",
          darkOrange: "dark-orange",
          darkGrey: " dark-grey",
          lightGrey: " dark-grey"
        },
        paddingTopBottom: "padding-top-bottom"
      },
      fourColumnLayout: [
        {
          title: "",
          body: "",
          id: 1,
          button: true,
          classes: "button orange-btn",
          link: "#",
          buttonTitle: "read more"
        },
        {
          title: "",
          body: "",
          id: 2,
          button: true,
          classes: "button orange-btn",
          link: "#",
          buttonTitle: "read more"
        },
        {
          title: "",
          body: "",
          id: 3,
          button: true,
          classes: "button orange-btn",
          link: "#",
          buttonTitle: "read more"
        },
        {
          title: "",
          body: "",
          id: 4,
          button: true,
          classes: "button orange-btn",
          link: "#",
          buttonTitle: "read more"
        }
      ]
    };
  }

  render() {
    let { title, generalStyleOptions, fourColumnLayout } = this.state;
    // styles
    return (
      <React.Fragment>
        <HeaderTag title={title} />
        <TwoColumnsLayout />
        <FourColumnsLayout
          generalStyleOptions={generalStyleOptions}
          vals={fourColumnLayout}
        />
        <ThreeColumnLayout />
        {/* <FourColumnsLayout /> */}
        <ThreeColumnLayoutTwo />
      </React.Fragment>
    );
  }
}
export default homePage;
