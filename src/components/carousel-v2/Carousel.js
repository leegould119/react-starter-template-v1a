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
      intervalTime: 7000,
      buttonData: imageUrls,
      data: imageUrls
    };
  }

  componentDidMount = () => {
    this.setBannerAnimation();
  };

  setBannerAnimation = () => {
    const id = new Date().getSeconds().toString() + "INTERVAL_ID";
    this.setState({ intervalId: id });
    this.animateBanner();
    let number = 0;
    this.addSlideActiveClass(number);
  };

  animateBanner = () => {
    let { intervalTime } = this.state;
    this.intervalId = setInterval(() => {
      let { pageNum, maxIndex } = this.state;
      if (pageNum == maxIndex) {
        this.setState({ pageNum: 0 });
        let number = 0;
        this.addSlideActiveClass(number);
      } else {
        this.setState({ pageNum: this.state.pageNum + 1 });
        let number = pageNum + 1;
        this.addSlideActiveClass(number);
      }
    }, intervalTime);
  };

  next = async () => {
    let { pageNum, maxIndex } = this.state;
    if (pageNum == maxIndex) {
      this.setState({ pageNum: 0 });
      this.addSlideActiveClass(0);
      this.addNextAnimation(pageNum);
    } else {
      this.setState({ pageNum: this.state.pageNum + 1 });
      let number = pageNum + 1;
      this.addSlideActiveClass(number);
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
    }, 50);
  };

  prev = () => {
    let { pageNum, maxIndex } = this.state;
    if (pageNum == 0) {
      this.setState({ pageNum: maxIndex });
      this.addSlideActiveClass(maxIndex);
      this.addBackAnimation(pageNum);
    } else {
      this.setState({ pageNum: this.state.pageNum - 1 });
      let number = pageNum - 1;
      this.addSlideActiveClass(number);
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
    }, 50);
  };

  addSlideActiveClass = (pageNum) => {
    console.log(pageNum);
    let { data } = this.state;
    const newData = [...data];

    newData.forEach((value) => {
      value.isActive = false;
    });
    if (newData[pageNum].isActive == true) {
      newData[pageNum].isActive = false;
    } else {
      newData[pageNum].isActive = true;
    }
    this.setState({ data: newData });
    // clearInterval(this.intervalId);
  };

  addActiveClass = (event) => {
    let ID = event.currentTarget.id,
      pageNumber = parseInt(ID),
      { data } = this.state;

    const newData = [...data];

    newData.forEach((value) => {
      value.isActive = false;
    });

    if (newData[pageNumber].isActive == true) {
      newData[pageNumber].isActive = false;
    } else {
      newData[pageNumber].isActive = true;
    }

    this.setState({ data: newData });
    this.setState({ pageNum: pageNumber });
  };

  componentWillUnmount = () => {
    clearInterval(this.intervalId);
  };

  render() {
    let { pageNum, buttonData } = this.state;
    let data = imageUrls[pageNum];
    return (
      <div className=" carousel">
        <BackButton prev={this.prev} />
        <ImageSlide data={data} />
        <BannerButtons data={buttonData} click={this.addActiveClass} />
        <NextButton next={this.next} />
      </div>
    );
  }
}

export default Carousel;
