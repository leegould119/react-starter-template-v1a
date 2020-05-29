import React, { Component } from "react";
import data from "./data";
import { BackButton, NextButton, Slide } from "../carousel-v3";
class Carousel1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageCount: null,
      pageNumber: null,
      startingPage: 1,
      itemsPerPage: 3,
      totalCols: 12,
      columns: null,
      dataLenght: data.length,
      data: data,
      dataSlice: []
    };
  }

  componentDidMount = () => {
    let { itemsPerPage, dataLenght, startingPage, totalCols } = this.state;

    let pageCount = parseInt(dataLenght / itemsPerPage);

    let columnNumer = totalCols / itemsPerPage;
    let columns = "col-" + columnNumer;

    let pageNumber = startingPage;
    this.setState({ pageCount: pageCount });
    this.setState({ pageNumber: pageNumber });
    this.setState({ columns: columns });
    setTimeout(() => {
      this.getData();
    }, 50);
  };
  next = () => {
    let { pageCount, pageNumber, startingPage } = this.state;

    if (pageNumber == pageCount) {
      this.setState({ pageNumber: startingPage });
      this.getData();
    } else {
      this.setState({ pageNumber: this.state.pageNumber + 1 });
      this.getData();
    }
  };
  prev = () => {
    let { pageCount, pageNumber, startingPage } = this.state;
    if (pageNumber == startingPage) {
      this.setState({ pageNumber: pageCount });
      this.getData();
    } else {
      this.setState({ pageNumber: this.state.pageNumber - 1 });
      this.getData();
    }
  };

  getData = () => {
    let { data, itemsPerPage, pageNumber, dataSlice } = this.state;

    const upperLimit = pageNumber * itemsPerPage;
    console.log("upper limit " + upperLimit);

    let newData = data.slice(upperLimit - itemsPerPage, upperLimit);
    this.setState({ dataSlice: newData });

    // console.log(dataSlice);
  };

  render() {
    let {
      itemsPerPage,
      data,
      columns,
      dataLenght,
      pageCount,
      pageNumber,
      dataSlice
    } = this.state;
    console.log("page number : " + pageNumber);
    console.log(dataSlice);
    return (
      <div className="carousel" style={{ height: "400px" }}>
        <BackButton prev={this.prev} />
        <div className="container padding-top-bottom">
          <h1> Slider 1</h1>
          <Slide data={dataSlice} columns={columns} />
        </div>
        <NextButton next={this.next} />
      </div>
    );
  }
}

export default Carousel1;
