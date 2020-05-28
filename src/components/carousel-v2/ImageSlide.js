import React, { Component } from "react";
import Button from "../elements/aButton";
export default class componentName extends Component {
  render() {
    let { data } = this.props;
    return (
      <div
        id={"slide" + data.id}
        className="image-slide"
        style={{
          backgroundImage: `url(${data.image})`
        }}
      >
        <div
          style={{
            marginTop: "150px",
            padding: "30px"
          }}
          id={"body" + data.id}
        >
          <h1>{data.title}</h1>
          <span>{data.body}</span>
          <Button
            link={data.buttonLink}
            target={data.target}
            buttonTitle={data.buttonTitle}
            classes={data.class}
          />
        </div>
      </div>
    );
  }
}
