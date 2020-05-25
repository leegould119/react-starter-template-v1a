import React, { Component } from "react";

// layouts
import FourColumnsLayout from "../components/pageLayouts/fourColumnLayout";
import TwoColumnsLayout from "../components/pageLayouts/twoColumnLayout";
import ThreeColumnLayout from "../components/pageLayouts/threeColumnLayout";

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
      projects: [
        {
          title: "",
          body: (
            <p>
              Non qui est cupidatat voluptate elit dolore nulla ipsum amet qui
              ea excepteur excepteur duis. Fugiat laborum anim reprehenderit
              commodo enim cillum qui aliqua sint dolore qui et consectetur.
            </p>
          ),
          id: 1,
          button: true,
          classes: "button orange-btn",
          link: "#",
          buttonTitle: "read more"
        },
        {
          title: "",
          body: (
            <p>
              Non qui est cupidatat voluptate elit dolore nulla ipsum amet qui
              ea excepteur excepteur duis. Fugiat laborum anim reprehenderit
              commodo enim cillum qui aliqua sint dolore qui et consectetur.
            </p>
          ),
          id: 2,
          button: true,
          classes: "button orange-btn",
          link: "#",
          buttonTitle: "read more"
        },
        {
          title: "",
          body: (
            <p>
              Non qui est cupidatat voluptate elit dolore nulla ipsum amet qui
              ea excepteur excepteur duis. Fugiat laborum anim reprehenderit
              commodo enim cillum qui aliqua sint dolore qui et consectetur.
            </p>
          ),
          id: 3,
          button: false,
          classes: "button orange-btn",
          link: "#",
          buttonTitle: "read more"
        },
        {
          title: "",
          body: (
            <p>
              Non qui est cupidatat voluptate elit dolore nulla ipsum amet qui
              ea excepteur excepteur duis. Fugiat laborum anim reprehenderit
              commodo enim cillum qui aliqua sint dolore qui et consectetur.
            </p>
          ),
          id: 4,
          button: true,
          classes: "button orange-btn",
          link: "#",
          buttonTitle: "read more"
        }
      ],
      threeColumnLayout: [
        {
          title: "",
          body: (
            <p>
              Non qui est cupidatat voluptate elit dolore nulla ipsum amet qui
              ea excepteur excepteur duis. Fugiat laborum anim reprehenderit
              commodo enim cillum qui aliqua sint dolore qui et consectetur.
            </p>
          ),
          id: 1,
          columnClasses: "col-4",
          button: true,
          classes: "button orange-btn",
          link: "#",
          buttonTitle: "read more"
        },
        {
          title: "",
          body: (
            <p>
              Non qui est cupidatat voluptate elit dolore nulla ipsum amet qui
              ea excepteur excepteur duis. Fugiat laborum anim reprehenderit
              commodo enim cillum qui aliqua sint dolore qui et consectetur.
            </p>
          ),
          id: 2,
          columnClasses: "col-4",
          button: true,
          classes: "button orange-btn",
          link: "#",
          buttonTitle: "read more"
        },
        {
          title: "",
          body: (
            <p>
              Non qui est cupidatat voluptate elit dolore nulla ipsum amet qui
              ea excepteur excepteur duis. Fugiat laborum anim reprehenderit
              commodo enim cillum qui aliqua sint dolore qui et consectetur.
            </p>
          ),
          id: 3,
          columnClasses: "col-4",
          button: true,
          classes: "button orange-btn",
          link: "#",
          buttonTitle: "read more"
        }
      ],
      threeColumnLayoutTwo: [
        {
          title: "",
          body: (
            <React.Fragment>
              <p>
                Ullamco proident aliqua esse excepteur quis ad fugiat
                incididunt. Qui aliqua consequat nostrud sunt pariatur
                incididunt. Fugiatnulla fugiat et esse minim sint ullamco eu
                aute cillum pariatur
              </p>
              <p>
                Ex deserunt esse esse culpa ut. Ut est velit non nostrud officia
                sunt do cillum culpa. Ad deserunt consectetur dolor et qui
                ullamco nulla elit ipsum in sunt minim. Laboris dolor qui minim
                adipisicing magna consectetur ex ex laborum do in. Dolor sunt
                aute sit non laboris mollit irure sint fugiat minim. Dolore qui
                quis duis anim fugiat non eiusmod dolor consequat culpa
                consectetur. Officia quis proident irure tempor id magna mollit
                quis. Duis duis aliquip velit tempor velit.
              </p>
            </React.Fragment>
          ),
          id: 1,
          columnClasses: "col-6",
          button: false,
          classes: "button orange-btn",
          link: "#",
          buttonTitle: "read more"
        },
        {
          title: "",
          body: "",
          id: 2,
          columnClasses: "col-3",
          button: false,
          classes: "button orange-btn",
          link: "#",
          buttonTitle: "read more"
        },
        {
          title: "",
          body: "",
          id: 3,
          columnClasses: "col-3",
          button: false,
          classes: "button orange-btn",
          link: "#",
          buttonTitle: "read more"
        }
      ]
    };
  }

  render() {
    let {
      title,
      generalStyleOptions,
      projects,
      threeColumnLayout,
      threeColumnLayoutTwo
    } = this.state;
    // styles

    return (
      <React.Fragment>
        <HeaderTag title={title} />
        <TwoColumnsLayout />
        <FourColumnsLayout
          generalStyleOptions={
            generalStyleOptions.backgroundColorOptions.darkGrey +
            " " +
            generalStyleOptions.paddingTopBottom
          }
          vals={projects}
        />
        <ThreeColumnLayout vals={threeColumnLayout} />
        <ThreeColumnLayout vals={threeColumnLayoutTwo} />
      </React.Fragment>
    );
  }
}
export default homePage;
