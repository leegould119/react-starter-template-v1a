import React, { Component } from "react";

import HeaderTag from "../components/elements/headerTag";
import Sections from "../components/pageLayouts/Sections";

class projectsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: {
        value: "Projects page",
        color: "title-text"
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
          buttonClass: "button orange-btn",
          link: "#",
          buttonTitle: "read more",
          colClass: "col-3"
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
          buttonClass: "button orange-btn",
          link: "#",
          buttonTitle: "read more",
          colClass: "col-3"
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
          buttonClass: "button orange-btn",
          link: "#",
          buttonTitle: "read more",
          colClass: "col-3"
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
          buttonClass: "button orange-btn",
          link: "#",
          buttonTitle: "read more",
          colClass: "col-3"
        }
      ],
      technologies: [
        {
          title: "project 1",
          body: (
            <p>
              Non qui est cupidatat voluptate elit dolore nulla ipsum amet qui
              ea excepteur excepteur duis. Fugiat laborum anim reprehenderit
              commodo enim cillum qui aliqua sint dolore qui et consectetur.
            </p>
          ),
          id: 1,
          button: false,
          buttonClass: "button orange-btn",
          link: "#",
          buttonTitle: "read more",
          colClass: "col-6"
        },
        {
          title: "project 2",
          body: (
            <p>
              Non qui est cupidatat voluptate elit dolore nulla ipsum amet qui
              ea excepteur excepteur duis. Fugiat laborum anim reprehenderit
              commodo enim cillum qui aliqua sint dolore qui et consectetur.
            </p>
          ),
          id: 2,
          button: false,
          buttonClass: "button orange-btn",
          link: "#",
          buttonTitle: "read more",
          colClass: "col-6"
        }
      ]
    };
  }

  render() {
    let { title, projects, technologies } = this.state;
    return (
      <React.Fragment>
        <HeaderTag title={title} />
        <Sections vals={projects} />
        <Sections vals={technologies} />
      </React.Fragment>
    );
  }
}

export default projectsPage;
