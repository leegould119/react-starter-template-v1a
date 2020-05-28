import React, { Component } from "react";
import Data from "./data";
class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: null,
      pageCount: null,
      pageNumber: null,
      startingPage: 1,
      itemsPerPage: 5,
      dataLength: Data.length,
      data: Data
    };
  }
  componentWillMount = () => {
    let { startingPage, itemsPerPage, dataLength, pageCount } = this.state;
    this.setState({ pageNumber: startingPage });
    this.setState({ pageCount: parseInt(dataLength / itemsPerPage) });
  };

  next = () => {
    let { startingPage, pageCount, pageNumber } = this.state;
    console.log();
    if (pageNumber == pageCount) {
      this.setState({ pageNumber: startingPage });
    } else {
      this.setState({ pageNumber: this.state.pageNumber + 1 });
    }
  };

  prev = () => {
    let { pageCount, pageNumber, startingPage } = this.state;

    if (pageNumber == startingPage) {
      this.setState({ pageNumber: pageCount });
    } else {
      this.setState({ pageNumber: this.state.pageNumber - 1 });
    }
  };

  render() {
    // let { pageNumber, itemsPerPage, pageCount, dataLength, data } = this.state;
    // console.log(
    //   " data lenght : " + dataLength + " items per page : " + itemsPerPage
    // );
    // console.log("pageNumber : " + pageNumber + " of " + pageCount);
    // let pageContent = data.map((data, idx) => {
    //   return <p key={idx}>{data.title}</p>;
    // });
    return (
      <div>
        {/* <a onClick={this.prev} href="#">
          prev items
        </a>
        <div>{pageContent}</div>
        <a onClick={this.next} href="#">
          next items
        </a> */}
      </div>
    );
  }
}

export default Carousel;
