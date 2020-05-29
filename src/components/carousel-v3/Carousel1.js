import React, { Component } from "react";
import data from "./data";
import { BackButton, NextButton } from "../carousel-v3";
class Carousel1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageCount: null,
      pageNumber: null,
      startingPage: 1,
      itemsPerPage: 4,
      dataLenght: data.length,
      data: data
    };
  }

  componentDidMount = () => {
    let { itemsPerPage, dataLenght, startingPage } = this.state;
    let pageCount = parseInt(dataLenght / itemsPerPage);
    let pageNumber = startingPage;
    this.setState({ pageCount: pageCount });
    this.setState({ pageNumber: pageNumber });
    setTimeout(() => {
      this.getData(startingPage);
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
    let { data, itemsPerPage, pageNumber } = this.state;
    const upperLimit = pageNumber * itemsPerPage;
    let dataSlice = data.slice(upperLimit - itemsPerPage, upperLimit);
    console.log(JSON.stringify(dataSlice));
  };

  render() {
    let { itemsPerPage, data, dataLenght, pageCount, pageNumber } = this.state;
    console.log("items per page : " + itemsPerPage);
    console.log("data length : " + dataLenght);
    console.log("page count : " + pageCount);
    // console.log("data : " + JSON.stringify(data));
    console.log("page number : " + pageNumber);
    return (
      <div className="carousel" style={{ height: "400px" }}>
        <BackButton prev={this.prev} />
        <div className="container">
          <div className="row">
            <div className="col-3">content holder</div>
            <div className="col-3">content holder</div>
            <div className="col-3">content holder</div>
            <div className="col-3">content holder</div>
          </div>
        </div>
        <NextButton next={this.next} />
      </div>
    );
  }
}

export default Carousel1;
