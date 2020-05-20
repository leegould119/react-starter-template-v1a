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

      twoColumnLayout: {
        fontColors: {
          lightOrange: "light-orange-color",
          darkOrange: "dark-orange-color",
          darkGrey: "dark-grey-color",
          white: "white"
        },
        paddingTopBottom: "padding-top-bottom",
        title: "about me",
        title1: "my background",
        bodyText:
          "Use it to describe your credentials, expertise, and goals. What’s the best way to start? The following exercises can be helpful in figuring all of that out, and will help you determine what to include based on your target audience. Spend about five minutes on each question. You can use the ‘example’ answers to give you an idea of what that answer might sound like in its final form, but be sure to use your own words. ",
        bodyText1:
          "You can use the ‘example’ answers to give you an idea of what that answer might sound like in its final form, but be sure to use your own words. "
      },
      fourColumnLayout: {
        background: {
          lightOrange: "  light-orange",
          darkOrange: " dark-orange",
          darkGrey: " dark-grey",
          lightGrey: " dark-grey"
        },
        paddingTopBottom: "padding-top-bottom"
      }
    };
  }

  render() {
    let { title, twoColumnLayout, fourColumnLayout } = this.state;
    // styles
    return (
      <React.Fragment>
        <HeaderTag title={title} />
        <TwoColumnsLayout params={twoColumnLayout} />
        <FourColumnsLayout
          params={
            fourColumnLayout.background.lightOrange +
            " " +
            fourColumnLayout.paddingTopBottom
          }
        />
        <ThreeColumnLayout />
        <FourColumnsLayout
          params={
            fourColumnLayout.background.darkGrey +
            " " +
            fourColumnLayout.paddingTopBottom
          }
        />
        <ThreeColumnLayoutTwo />
      </React.Fragment>
    );
  }
}
export default homePage;
