import React, { Component } from "react";

import Button from "../elements/aButton";

class fourColumnLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let { vals, generalStyleOptions } = this.props;

    let pageContent = vals.map((data, idx) => {
      return (
        <div key={data.id} id={data.id} className="col-3">
          <h2>{data.title ? data.title : "placeholder title"}</h2>
          <p>{data.body ? data.body : "placeholder text"}</p>

          {(() => {
            if (data.button === true) {
              return (
                <Button
                  link={data.link}
                  classes={data.classes}
                  buttonTitle={data.buttonTitle}
                />
              );
            }
          })()}
        </div>
      );
    });

    return (
      <section className={generalStyleOptions}>
        <div className="container">
          <div className="row">{pageContent}</div>
        </div>
      </section>
    );
  }
}

export default fourColumnLayout;
