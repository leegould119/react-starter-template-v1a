import React, { Component } from "react";

export default class componentName extends Component {
  render() {
    let { data } = this.props;
    return (
      <div
        className="image-slide"
        style={{
          backgroundImage: `url(${data.image})`
        }}
      >
        <h1>{data.title}</h1>
        <span>{data.body}</span>
      </div>
    );
  }
}
