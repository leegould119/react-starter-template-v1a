import React, { Component } from "react";

import Button from "../elements/aButton";
export default class componentName extends Component {
  render() {
    let { vals } = this.props;
    let pageContent = vals.map((data, idx) => {
      return (
        <div key={idx} id={idx} className={data.colClass}>
          <h2>{data.title}</h2>
          {data.body}

          {(() => {
            if (data.button === true) {
              return (
                <Button
                  link={data.link}
                  classes={data.buttonClass}
                  buttonTitle={data.buttonTitle}
                />
              );
            }
          })()}
        </div>
      );
    });
    return (
      <React.Fragment>
        <div className="row"> {pageContent} </div>
      </React.Fragment>
    );
  }
}
