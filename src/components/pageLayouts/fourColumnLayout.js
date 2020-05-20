import React, { Component } from "react";

import AButton from "../elements/aButton";

class fourColumnLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttons: {
        hasButtons: false,
        classes: {
          mainClass: "button",
          orangeButton: "orange-btn",
          greyButton: "grey-btn"
        },
        hrefs: {
          link1: "#",
          link2: "#",
          link3: "#",
          link4: "#"
        },
        title: {
          title1: "read more",
          title2: "visit site",
          title3: "donate",
          title4: "read more"
        }
      }
    };
  }
  render() {
    let { params } = this.props;
    let { buttons } = this.state;
    console.log("buttons object : " + JSON.stringify(buttons));
    return (
      <section className={params}>
        <div className="container">
          <div className="row">
            <div className="col-3">
              <h2> title</h2>
              <p>
                Voluptate reprehenderit culpa aute officia ipsum cupidatat dolor
                et pariatur. Adipisicing mollit culpa excepteur do labore esse
                aliqua.
              </p>
              <AButton
                classes={
                  buttons.classes.mainClass + " " + buttons.classes.orangeButton
                }
                hrefs={buttons.hrefs.link1}
                title={buttons.title.title1}
              />
            </div>

            <div className="col-3">
              <h2> title</h2>
              <p>
                Voluptate reprehenderit culpa aute officia ipsum cupidatat dolor
                et pariatur. Adipisicing mollit culpa excepteur do labore esse
                aliqua.
              </p>
              <AButton
                classes={
                  buttons.classes.mainClass + " " + buttons.classes.greyButton
                }
                hrefs={buttons.hrefs.link1}
                title={buttons.title.title2}
              />
            </div>

            <div className="col-3">
              <h2> title</h2>
              <p>
                Voluptate reprehenderit culpa aute officia ipsum cupidatat dolor
                et pariatur. Adipisicing mollit culpa excepteur do labore esse
                aliqua.
              </p>
            </div>

            <div className="col-3">
              <h2> title</h2>
              <p>
                Voluptate reprehenderit culpa aute officia ipsum cupidatat dolor
                et pariatur. Adipisicing mollit culpa excepteur do labore esse
                aliqua.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default fourColumnLayout;
