import React, { Component } from "react";
import { NextButton, BackButton } from "../carousel";
// importing the images
import image1 from "../../img/banner1.jpg";
import image2 from "../../img/banner2.jpg";
import image3 from "../../img/banner3.jpg";
import image4 from "../../img/banner4.jpg";
import image5 from "../../img/banner5.jpg";
import image6 from "../../img/banner6.jpg";

const imgUrls = [
  {
    image: image1,
    title: "trees and a river",
    animation: "fadeInLeft",
    body: (
      <span>
        Non qui est cupidatat voluptate elit dolore nulla ipsum amet qui ea
        excepteur excepteur duis.
      </span>
    )
  },
  {
    image: image2,
    title: "landscape image of europe",
    body: (
      <span>
        Non qui est cupidatat voluptate elit dolore nulla ipsum amet qui ea
        excepteur excepteur duis.
      </span>
    )
  },
  {
    image: image3,
    title: "spring is coming",
    body: (
      <span>
        Non qui est cupidatat voluptate elit dolore nulla ipsum amet qui ea
        excepteur excepteur duis.
      </span>
    )
  },
  {
    image: image4,
    title: "summer time ...",
    body: (
      <span>
        Non qui est cupidatat voluptate elit dolore nulla ipsum amet qui ea
        excepteur excepteur duis.
      </span>
    )
  },
  {
    image: image5,
    title: "a walk in the forest",
    body: (
      <span>
        Non qui est cupidatat voluptate elit dolore nulla ipsum amet qui ea
        excepteur excepteur duis.
      </span>
    )
  },
  {
    image: image6,
    title: "lotus blossom",
    body: (
      <span>
        Non qui est cupidatat voluptate elit dolore nulla ipsum amet qui ea
        excepteur excepteur duis.
      </span>
    )
  }
];

const ImageSlide = ({ data }) => {
  console.log("data :" + JSON.stringify(data));
  return (
    <div
      className="image-slide"
      style={{
        backgroundImage: `url(${data.image})`
      }}
    >
      <h1>{data.title}</h1>
      {data.body}
    </div>
  );
};

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageNum: 0,
      intervalId: "",
      imageChangeTime: 5000
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
    let { imageChangeTime } = this.state;
    this.intervalId = setInterval(() => {
      console.log(this.state.intervalId);
      const lastIndex = imgUrls.length - 1;
      let { pageNum } = this.state;

      if (pageNum === lastIndex) {
        this.setState({ pageNum: 0 });
      } else {
        this.setState({ pageNum: this.state.pageNum + 1 });
      }
    }, imageChangeTime);
  };

  next = () => {
    //  clear ther interval
    clearInterval(this.intervalId);
    const lastIndex = imgUrls.length - 1;
    console.log("last index : " + lastIndex);
    let { pageNum } = this.state;
    if (pageNum === lastIndex) {
      this.setState({ pageNum: 0 });
      this.setBannerAnimation();
    } else {
      this.setState({ pageNum: pageNum + 1 });
      this.setBannerAnimation();
    }
    // starts the interval
  };

  prev = () => {
    //  clear ther interval
    clearInterval(this.intervalId);
    let { pageNum } = this.state;
    if (pageNum == 0) {
      this.setBannerAnimation();
      return;
    } else {
      this.setState({ pageNum: this.state.pageNum - 1 });
      this.setBannerAnimation();
    }
    // starts the interval
  };

  componentWillUnmount = () => {
    clearInterval(this.intervalId);
  };

  render() {
    let { pageNum } = this.state;
    console.log(pageNum);

    return (
      <section className="container">
        <div className="carousel">
          <NextButton next={this.next} />
          <ImageSlide data={imgUrls[pageNum]} />
          <BackButton prev={this.prev} />
        </div>
      </section>
    );
  }
}
export default Carousel;
