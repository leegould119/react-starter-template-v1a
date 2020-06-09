import React, { Component } from "react";
import debounce from "lodash.debounce";

import data from "./data";

class galleryComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data,
      dataLenght: data.length + 1,
      page: 1,
      offset: 10,
      itemsPerPage: 8,
      data: data,
      dataSlice: [],
      maxIndex: null
    };
  }

  componentDidMount = () => {
    window.addEventListener("scroll", this.handleOnScroll);
    this.getNextPage();
  };

  handleOnScroll = debounce(() => {
    let { page, offset } = this.state;

    let scrollTop =
      (document.documentElement && document.documentElement.scrollTop) ||
      document.body.scrollTop;
    let scrollHeight =
      (document.documentElement &&
        document.documentElement.scrollHeight - offset) ||
      document.body.scrollHeight - offset;
    let clientHeight =
      document.documentElement.clientHeight || window.innerHeight;
    let scrolledToBottom =
      Math.ceil(scrollTop + clientHeight) >= scrollHeight - offset;

    this.getNextPage();
  }, 300);

  getNextPage = () => {
    let { data, page, dataSlice, itemsPerPage } = this.state;
    this.setState({ page: this.state.page + 1 }, function () {
      console.log("next page : " + this.state.page);

      const upperLimit = page * itemsPerPage;
      this.setState({ upperLimit: upperLimit });

      let newData = data.slice(upperLimit - itemsPerPage, upperLimit);
      this.setState({ dataSlice: [...dataSlice, ...newData] });
      // this.setState({ dataSlice: newData });
    });
  };

  componentWillUnmount = () => {
    window.removeEventListener("scroll", this.handleOnScroll);
  };

  render() {
    let { data, columns, page, maxData, dataSlice } = this.state;
    // console.log("items per page : " + page);
    // console.log("items per page : " + maxData);
    let gallery = dataSlice.map((item, index) => {
      return (
        <React.StrictMode key={index}>
          <div style={{ float: "left", width: "25%" }}>
            <div>{/* <h1>{item.title}</h1> */}</div>
            <div
              style={{
                backgroundImage: `url(${item.imageLink})`,
                width: "calc(100% - 10px)",
                height: "340px",
                backgroundPosition: "center center",
                backgroundSize: "cover",
                verticalAlign: "center",
                marginBottom: "10px"
              }}
            />
            {/* <p>{item.description}</p> */}
          </div>
        </React.StrictMode>
      );
    });
    return <section>{gallery}</section>;
  }
}

export default galleryComponent;
