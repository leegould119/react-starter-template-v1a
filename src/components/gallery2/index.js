import React, { Component } from "react";
import data from "./data";
import debounce from "lodash.debounce";
class GalleryComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data,
      offset: 100,
      dataLenght: data.length + 1,
      page: 1,
      itemsPerPage: 8,
      dataSlice: [],
      maxIndex: null,
      noMoreDataToRetrieve: false,
      width: null,
      deviceBreakPoint: null,
      // device orientation true = portrait
      deviceOrientation: true,
      columns: null
    };
  }

  detectDeviceWidth = () => {
    this.setState({ width: window.innerWidth }, function () {
      let { width } = this.state,
        device_4K = 3840,
        device_XL = 992,
        device_L = 768,
        device_S = 576,
        device_XS = 320;

      if (device_4K <= width) {
        this.setState({ deviceBreakPoint: device_4K }, function () {
          this.handleColumns();
        });
      } else if (device_XL <= width) {
        this.setState({ deviceBreakPoint: device_XL }, function () {
          this.handleColumns();
        });
      } else if (device_L <= width) {
        this.setState({ deviceBreakPoint: device_L }, function () {
          this.handleColumns();
        });
      } else if (device_S <= width) {
        this.setState({ deviceBreakPoint: device_S }, function () {
          this.handleColumns();
        });
      } else if (device_XS <= width) {
        this.setState({ deviceBreakPoint: device_XS }, function () {
          this.handleColumns();
        });
      }
    });
  };
  handleColumns = async () => {
    let { deviceBreakPoint, deviceOrientation, columns } = this.state;

    if (deviceBreakPoint == 320) {
      this.setState({ columns: "100%" });
    } else if (deviceBreakPoint == 576) {
      this.setState({ columns: "50%" });
    } else if (deviceBreakPoint == 768) {
      this.setState({ columns: "25%" });
    } else if (deviceBreakPoint == 992) {
      this.setState({ columns: "20%" });
    }
  };
  detectDeviceOrientation = () => {
    let deviceOrientation = true;
    if (window.matchMedia("(orientation: portrait)").matches) {
      deviceOrientation = true;
    }
    if (window.matchMedia("(orientation: landscape)").matches) {
      deviceOrientation = false;
    }
    this.setState({ deviceOrientation: deviceOrientation });
  };

  componentDidMount = () => {
    window.addEventListener("scroll", this.handleScroll);
    window.addEventListener("resize", this.detectDeviceWidth);
    window.addEventListener("orientationchange", this.detectDeviceOrientation);
    this.detectDeviceWidth();
    this.getData();
  };

  handleScroll = debounce(() => {
    let { page, offset, noMoreDataToRetrieve } = this.state;

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
    if (noMoreDataToRetrieve == true) {
      return;
    } else {
      this.getData();
    }
  }, 300);

  getData = () => {
    let {
      data,
      dataLenght,
      page,
      itemsPerPage,
      dataSlice,
      noMoreDataToRetrieve
    } = this.state;
    this.setState({ page: this.state.page + 1 }, function () {
      console.log("page number" + this.state.page);
      const upperLimit = page * itemsPerPage;
      console.log("upper limit " + upperLimit);
      let newData = data.slice(upperLimit - itemsPerPage, upperLimit);
      console.log("new data :" + JSON.stringify(newData));
      console.log(newData.length);
      if (newData.length == 0) {
        this.setState({ noMoreDataToRetrieve: true });
      } else {
        this.setState({ dataSlice: [...dataSlice, ...newData] });
      }
    });
  };

  componentWillUnmount = () => {
    window.removeEventListener("scroll", this.handleScroll);
    window.removeEventListener("resize", this.detectDeviceWidth);
    window.reomveEventListener(
      "orientationchange",
      this.detectDeviceOrientation
    );
  };

  galleryItemClickHandler = (e) => {
    e.preventDefault();
    let id = e.target.id;
    console.log("item id " + id);
  };
  likeItemClickHandler = (e) => {
    e.preventDefault();
    let id = e.target.id;
    console.log("item id" + id);
  };
  render() {
    let {
      dataSlice,
      columns,
      deviceOrientation,
      deviceBreakPoint
    } = this.state;

    console.log("device break point :" + deviceBreakPoint);
    console.log("device orientation :  " + deviceOrientation);
    let gallery = dataSlice.map((item, index) => {
      return (
        <React.Fragment key={index}>
          <div className="gallery-wrapper" style={{ width: `${columns}` }}>
            <div
              id={item.id}
              onClick={this.galleryItemClickHandler}
              style={{
                backgroundImage: `url(${item.imageLink})`
              }}
              className="gallery-item"
            >
              <h1 className="title">{item.title}</h1>
              <p className="description">{item.description}</p>
              <span id={item.id} className="icon" />
              <span
                id={item.id}
                className="galleryLikeButton"
                onClick={this.likeItemClickHandler}
              />
            </div>
          </div>
        </React.Fragment>
      );
    });
    return (
      <section className="gallery-container">
        <div>{gallery} </div>
      </section>
    );
  }
}

export default GalleryComponent;
