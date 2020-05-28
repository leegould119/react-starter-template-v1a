import React, { Component } from "react";

import {
  NextButton,
  BackButton,
  ImageSlide,
  BannerButtons
} from "../carousel-v2/";

import imageUrls from "./carouselData";

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageNum: 0,
      intervalId: "",
      maxIndex: imageUrls.length - 1,
      intervalTime: 5000,
      buttonData: imageUrls
    };
  }

  componentDidMount = () => {
    this.setBannerAnimation();
  };

  setBannerAnimation = () => {
    const id = new Date().getSeconds().toString() + "INTERVAL_ID";
    this.setState({ intervalId: id });
    this.animateBanner();
  };

  animateBanner = () => {
    let { intervalTime } = this.state;

    this.intervalId = setInterval(() => {
      let { pageNum, maxIndex } = this.state;
      if (pageNum == maxIndex) {
        this.setState({ pageNum: 0 });
      } else {
        this.setState({ pageNum: this.state.pageNum + 1 });
      }
    }, intervalTime);
  };

  next = () => {
    clearInterval(this.intervalId);
    let { pageNum, maxIndex } = this.state;
    if (pageNum == maxIndex) {
      this.setState({ pageNum: 0 });
      this.addNextAnimation(pageNum);
    } else {
      this.setState({ pageNum: this.state.pageNum + 1 });
      this.addNextAnimation(pageNum);
    }
  };

  addNextAnimation = (pageNum) => {
    console.log("next animation page number : " + pageNum);
    let currentSlide = document.getElementById("slide" + pageNum);
    let currentBody = document.getElementById("body" + pageNum);
    currentSlide.classList.remove("animateElementBack");
    currentSlide.classList.remove("animateElementForward");
    currentBody.classList.remove("animateTitleForward");
    currentBody.classList.remove("animateTitleBack");
    setTimeout(() => {
      currentSlide.classList.add("animateElementForward");
      currentBody.classList.add("animateTitleForward");
    }, 5);
  };

  prev = () => {
    clearInterval(this.intervalId);
    let { pageNum, maxIndex } = this.state;
    if (pageNum == 0) {
      this.setState({ pageNum: maxIndex });
      this.addBackAnimation(pageNum);
    } else {
      this.setState({ pageNum: this.state.pageNum - 1 });
      this.addBackAnimation(pageNum);
    }
  };

  addBackAnimation = (pageNum) => {
    console.log(" back animation page number : " + pageNum);
    let currentSlide = document.getElementById("slide" + pageNum);
    let currentBody = document.getElementById("body" + pageNum);
    currentSlide.classList.remove("animateElementBack");
    currentSlide.classList.remove("animateElementForward");
    currentBody.classList.remove("animateTitleForward");
    currentBody.classList.remove("animateTitleBack");
    setTimeout(() => {
      currentSlide.classList.add("animateElementBack");
      currentBody.classList.add("animateTitleBack");
    }, 5);
  };

  componentWillUnmount = () => {
    clearInterval(this.intervalId);
  };

  render() {
    let { pageNum, buttonData } = this.state;
    let data = imageUrls[pageNum];
    console.log("page number: " + pageNum);
    return (
      <div className=" carousel">
        <BackButton prev={this.prev} />
        <ImageSlide data={data} />
        <BannerButtons data={buttonData} />
        <NextButton next={this.next} />
      </div>
    );
  }
}

export default Carousel;
