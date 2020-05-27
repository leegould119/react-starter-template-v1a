import React, { Component } from "react";
import Button from "../elements/aButton";
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
        <Button
          link={data.buttonLink}
          target=""
          buttonTitle={data.buttonTitle}
          classes={data.class}
        />
      </div>
    );
  }
}
