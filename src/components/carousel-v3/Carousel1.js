import React, { Component } from "react";
import data from "./data";
import { BackButton, NextButton, Slide } from "../carousel-v3";
import deviceDetection from "../../utils/deviceDetection";

import FlyoutPanel from "../../components/pageLayouts/flyoutPanel";
class Carousel1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageCount: null,
      pageNumber: 1,
      startingPage: 1,
      itemsPerPage: 3,
      totalCols: 12,
      columns: null,
      dataLenght: data.length + 1,
      data: data,
      dataSlice: [],
      maxIndex: null,
      deviceDetection: deviceDetection,
      device: "",
      intervalTime: 4000
    };
  }

  componentDidMount = async () => {
    let {
      itemsPerPage,
      dataLenght,
      startingPage,
      totalCols,
      device
    } = this.state;

    let Device = this.state.deviceDetection();
    let columnNumber = null,
      columns,
      pageCount;

    console.log(Device);
    if (Device == "Android" || Device == "iOS") {
      columns = "col-6-sm";

      await this.setState({ itemsPerPage: 2 }, function () {
        pageCount = parseInt(dataLenght / 2);
        console.log("page count: " + pageCount);
        console.log("page count: " + itemsPerPage);
      });
    } else {
      columnNumber = totalCols / itemsPerPage;
      columns = "col-" + columnNumber;
      pageCount = parseInt(dataLenght / itemsPerPage);
    }

    this.setState({
      pageCount: pageCount,
      columns: columns,
      device: Device
    });
    this.getData();
  };

  next = () => {
    let { pageCount, pageNumber, startingPage } = this.state;
    if (pageNumber == pageCount) {
      this.setState({ pageNumber: startingPage }, function () {
        this.getData();
      });
    } else {
      this.setState({ pageNumber: this.state.pageNumber + 1 }, function () {
        this.getData();
      });
    }
  };

  prev = () => {
    let { pageCount, pageNumber, startingPage } = this.state;
    if (pageNumber == startingPage) {
      this.setState({ pageNumber: pageCount }, function () {
        this.getData();
      });
    } else {
      this.setState({ pageNumber: this.state.pageNumber - 1 }, function () {
        this.getData();
      });
    }
  };

  getData = () => {
    let { data, itemsPerPage, dataSlice, pageNumber } = this.state;
    const upperLimit = pageNumber * itemsPerPage;
    this.setState({ upperLimit: upperLimit });
    let newData = data.slice(upperLimit - itemsPerPage, upperLimit);
    this.setState({ dataSlice: newData });
  };

  togglePanel = (e) => {
    e.preventDefault();
    let id = e.target.id;
    console.log("id " + id);

    let newData = [...data];

    if (newData[id].showHidePanel == true) {
      newData[id].showHidePanel = false;
    } else {
      newData.forEach((value) => {
        value.showHidePanel = false;
      });
      newData[id].showHidePanel = true;
    }

    this.setState({ data: newData });
  };

  render() {
    let {
      itemsPerPage,
      columns,
      dataLenght,
      pageCount,
      dataSlice,
      data,
      pageNumber,
      device
    } = this.state;
    return (
      <React.Fragment>
        <div className="carousel">
          <BackButton prev={this.prev} />
          <div className="container padding-top-bottom">
            <h1> Slider 1</h1>
            <Slide
              data={dataSlice}
              columns={columns}
              togglePanel={this.togglePanel}
            />
          </div>
          <NextButton next={this.next} />
        </div>
        <FlyoutPanel data={data} togglePanel={this.togglePanel} />
      </React.Fragment>
    );
  }
}

export default Carousel1;
