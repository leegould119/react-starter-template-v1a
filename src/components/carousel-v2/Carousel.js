import React, { Component } from "react";

import { NextButton, BackButton } from "../carousel-v2/";

import bannerImage1 from "../../img/banner1.jpg";
import bannerImage2 from "../../img/banner2.jpg";
import bannerImage3 from "../../img/banner3.jpg";
import bannerImage4 from "../../img/banner4.jpg";
import bannerImage5 from "../../img/banner5.jpg";

const imageUrls = [
  {
    image: bannerImage1,
    title: "banner 1",
    body:
      "Non qui est cupidatat voluptate elit dolore nulla ipsum amet qui ea excepteur excepteur duis."
  },
  {
    image: bannerImage2,
    title: " banner 2",
    body:
      "Non qui est cupidatat voluptate elit dolore nulla ipsum amet qui ea excepteur excepteur duis."
  },
  {
    image: bannerImage3,
    title: " banner 3",
    body:
      "Non qui est cupidatat voluptate elit dolore nulla ipsum amet qui ea excepteur excepteur duis."
  },
  {
    image: bannerImage4,
    title: " banner 4",
    body:
      "Non qui est cupidatat voluptate elit dolore nulla ipsum amet qui ea excepteur excepteur duis."
  },
  {
    image: bannerImage5,
    title: " banner 4",
    body:
      "Non qui est cupidatat voluptate elit dolore nulla ipsum amet qui ea excepteur excepteur duis."
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
      <span>{data.body}</span>
    </div>
  );
};

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
    console.log("page number: " + pageNum);
    return (
      <div className="carousel">
        <BackButton prev={this.prev} />
        <ImageSlide data={imageUrls[pageNum]} />
        <NextButton next={this.next} />
      </div>
    );
  }
}
export default Carousel;
