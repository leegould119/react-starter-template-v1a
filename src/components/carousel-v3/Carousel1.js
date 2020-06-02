import React, { Component } from "react";
import data from "./data";
import { BackButton, NextButton, Slide } from "../carousel-v3";
import deviceDetection from "../../utils/deviceDetection";
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
      dataLenght: data.length + 1,
      data: data,
      dataSlice: [],
      deviceDetection: deviceDetection,
      device: ""
    };
  }

  componentDidMount = () => {
    let { itemsPerPage, dataLenght, startingPage, totalCols } = this.state;
    let Device = this.state.deviceDetection();
    let pageCount = parseInt(dataLenght / itemsPerPage);
    let columnNumer = totalCols / itemsPerPage;
    let columns = "col-" + columnNumer;
    let pageNumber = startingPage;
    this.setState({ pageCount: pageCount });
    this.setState({ pageNumber: pageNumber });
    this.setState({ columns: columns });
    this.getData(pageNumber);
  };

  componentDidUpdate = () => {
    let Device = this.state.deviceDetection();
    let { device } = this.state;
    // this.setState({ device: Device });
  };

  next = () => {
    let { pageCount, pageNumber, startingPage } = this.state;

    if (pageNumber == pageCount) {
      this.setState({ pageNumber: startingPage });
      this.getData(pageNumber);
    } else {
      this.setState({ pageNumber: this.state.pageNumber + 1 });
      this.getData(pageNumber);
    }
  };
  prev = async () => {
    let { pageCount, pageNumber, startingPage } = this.state;
    // console.log("starting page: " + startingPage);
    console.log("page count :" + pageCount);
    if (pageNumber == startingPage) {
      await this.setState({ pageNumber: pageCount });
      await this.getData(pageNumber);
    } else {
      await this.setState({ pageNumber: this.state.pageNumber - 1 });
      await this.getData(pageNumber);
    }
  };

  getData = (pageNumber) => {
    let { data, itemsPerPage, dataSlice } = this.state;

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
    console.log("page number" + pageNumber);
    console.log(dataSlice);
    return (
      <div className="carousel">
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
