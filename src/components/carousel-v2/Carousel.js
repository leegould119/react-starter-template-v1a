import React, { Component } from "react";

import { NextButton, BackButton, ImageSlide } from "../carousel-v2/";

import imageUrls from "./carouselData";

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageNum: 0,
      maxIndex: imageUrls.length - 1
    };
  }

  next = () => {
    let { pageNum, maxIndex } = this.state;
    if (pageNum == maxIndex) {
      this.setState({ pageNum: 0 });
    } else {
      this.setState({ pageNum: this.state.pageNum + 1 });
    }
  };

  prev = () => {
    let { pageNum, maxIndex } = this.state;
    if (pageNum == 0) {
      this.setState({ pageNum: maxIndex });
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
