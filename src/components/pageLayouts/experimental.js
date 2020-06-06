import React, { Component } from "react";
import data from "../carousel-v3/data";

export default class testComponent extends Component {
  render() {
    let { data, handleClick } = this.props;
    let comp = data.map((data, idx) => {
      return (
        <React.Fragment key={data.id}>
          {(() => {
            if (data.subContentIsVisible == true) {
              return (
                <section
                  id={"container" + data.id}
                  className={"dark-orange padding-top-bottom"}
                >
                  <div className="container">
                    <div className="row">
                      <div className="col-12">
                        <h1>{data.title}</h1>{" "}
                        <a
                          id={data.id}
                          className="close-btn"
                          onClick={handleClick}
                        >
                          &times;
                        </a>
                        <p>{data.body}</p>
                      </div>
                    </div>
                  </div>
                </section>
              );
            }
          })()}
        </React.Fragment>
      );
    });

    return <React.Fragment>{comp}</React.Fragment>;
  }
}
