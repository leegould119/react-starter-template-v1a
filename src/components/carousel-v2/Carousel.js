import React, { Component } from "react";

import { NextButton, BackButton, ImageSlide } from "../carousel-v2/";

import imageUrls from "./carouselData";

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageNum: 0
    };
  }

  next = () => {
    let { pageNum } = this.state;

    this.setState({ pageNum: this.state.pageNum + 1 });
  };

  prev = () => {
    let { pageNum } = this.state;
    if (pageNum == 0) {
      return;
    } else {
      this.setState({ pageNum: this.state.pageNum - 1 });
    }
  };

  render() {
    let { pageNum } = this.state;
    let data = imageUrls[pageNum];
    console.log("page number: " + pageNum);
    return (
      <div className="carousel">
        <BackButton prev={this.prev} />
        <ImageSlide data={data} />
        <NextButton next={this.next} />
      </div>
    );
  }
}
export default Carousel;
