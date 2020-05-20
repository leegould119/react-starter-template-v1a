import React, { Component } from "react";

import FourColumnsLayout from "../components/pageLayouts/fourColumnLayout";
import TwoColumnsLayout from "../components/pageLayouts/twoColumnLayout";
import HeaderTag from "../components/elements/headerTag";
class projectsPage extends Component {
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

    return (
      <React.Fragment>
        <HeaderTag title={title} />
        <FourColumnsLayout />
        <TwoColumnsLayout params={twoColumnLayout} />
        <FourColumnsLayout
          params={
            fourColumnLayout.background.lightOrange +
            " " +
            fourColumnLayout.paddingTopBottom
          }
        />
        <TwoColumnsLayout params={twoColumnLayout} />
      </React.Fragment>
    );
  }
}

export default projectsPage;
