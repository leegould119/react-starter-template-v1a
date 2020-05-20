import React, { Component } from "react";

class headerTag extends Component {
  render() {
    let { title } = this.props;
    let color = this.props.title.color;
    console.log("title " + JSON.stringify(title));
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className={title.color}>
              {title.value ? title.value : "placeholder text"}{" "}
            </h1>
          </div>
        </div>
      </div>
    );
  }
}
export default headerTag;
