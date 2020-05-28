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
            marginTop: "50px",
            padding: "50px"
          }}
          id={"body" + data.id}
        >
          <h1>{data.title}</h1>
          <br />
          <p>{data.body}</p>
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
