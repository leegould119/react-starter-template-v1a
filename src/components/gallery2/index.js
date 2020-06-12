import React, { Component } from "react";
import data from "./data";
import debounce from "lodash.debounce";
import { GalleryModal } from "../modal/";
import LikeButton from "../elements/likeButton";
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
      columns: null,
      openCloseModal: false,
      imageId: null
    };
  }

  detectDeviceWidth = () => {
    this.setState({ width: window.innerWidth }, function () {
      let { width } = this.state,
        device_4K = 3840,
        device_XXL = 1366,
        device_XL = 992,
        device_L = 768,
        device_S = 567,
        device_XS = 320;

      if (device_4K <= width) {
        this.setState({ deviceBreakPoint: device_4K }, function () {
          this.detectDeviceOrientation();
        });
      } else if (device_XXL <= width) {
        this.setState({ deviceBreakPoint: device_XXL }, function () {
          this.detectDeviceOrientation();
        });
      } else if (device_XL <= width) {
        this.setState({ deviceBreakPoint: device_XL }, function () {
          this.detectDeviceOrientation();
        });
      } else if (device_L <= width) {
        this.setState({ deviceBreakPoint: device_L }, function () {
          this.detectDeviceOrientation();
        });
      } else if (device_S <= width) {
        this.setState({ deviceBreakPoint: device_S }, function () {
          this.detectDeviceOrientation();
        });
      } else if (device_XS <= width) {
        this.setState({ deviceBreakPoint: device_XS }, function () {
          this.detectDeviceOrientation();
        });
      }
    });
  };
  detectDeviceOrientation = () => {
    let deviceOrientation = true;
    if (window.matchMedia("(orientation: portrait)").matches) {
      deviceOrientation = true;
    }
    if (window.matchMedia("(orientation: landscape)").matches) {
      deviceOrientation = false;
    }
    this.setState({ deviceOrientation: deviceOrientation }, function () {
      this.handleColumns();
    });
  };

  handleColumns = async () => {
    let {
      deviceBreakPoint,
      deviceOrientation,
      itemsPerPage,
      columns
    } = this.state;
    // device orientation :true for portrait and false for landscape

    if (deviceBreakPoint == 320) {
      this.setState({ columns: "100%", itemsPerPage: 2 });
    } else if (deviceBreakPoint == 567 && deviceOrientation == true) {
      this.setState({ columns: "50%", itemsPerPage: 6 });
    } else if (deviceBreakPoint == 567 && deviceOrientation == false) {
      this.setState({ columns: "50%", itemsPerPage: 6 });
    } else if (deviceBreakPoint == 768 && deviceOrientation == true) {
      this.setState({ columns: "33.3%", itemsPerPage: 8 });
    } else if (deviceBreakPoint == 768 && deviceOrientation == false) {
      this.setState({ columns: "33.3%", itemsPerPage: 8 });
    } else if (deviceBreakPoint == 992 && deviceOrientation == false) {
      this.setState({ columns: "25%", itemsPerPage: 8 });
    } else if (deviceBreakPoint == 992 && deviceOrientation == true) {
      this.setState({ columns: "25%", itemsPerPage: 8 });
    } else if (deviceBreakPoint == 1366 && deviceOrientation == false) {
      this.setState({ columns: "20%", itemsPerPage: 10 });
    }
  };

  componentDidMount = () => {
    window.addEventListener("scroll", this.handleScroll);
    window.addEventListener("resize", this.detectDeviceWidth);
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
      // console.log("page number" + this.state.page);
      const upperLimit = page * itemsPerPage;
      // console.log("upper limit " + upperLimit);
      let newData = data.slice(upperLimit - itemsPerPage, upperLimit);
      // console.log("new data :" + JSON.stringify(newData));
      // console.log(newData.length);
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
  };

  galleryItemClickHandler = async (e) => {
    e.preventDefault();
    let id = e.target.id;

    if ((id = "likeButton" + id)) {
      return;
    } else {
      setTimeout(async () => {
        await this.setState({
          openCloseModal: !this.state.openCloseModal,
          imageId: id
        });
      }, 20);
    }
  };

  render() {
    let {
      dataSlice,
      columns,
      deviceOrientation,
      deviceBreakPoint,
      openCloseModal,
      imageId,
      data
    } = this.state;

    // console.log("device break point :" + deviceBreakPoint);
    // console.log("device orientation :  " + deviceOrientation);
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
              <h1 id={item.id} className="title">
                {item.title}
              </h1>
              <p id={item.id} className="description">
                {item.description}
              </p>
              <span id={item.id} className="icon" />
              <LikeButton id={item.id} />
            </div>
          </div>
        </React.Fragment>
      );
    });
    return (
      <React.Fragment>
        <GalleryModal
          galleryItemClickHandler={this.galleryItemClickHandler}
          openCloseModal={openCloseModal}
          imageId={imageId}
          data={data}
        />
        <section className="gallery-container">
          <div>{gallery} </div>
        </section>
      </React.Fragment>
    );
  }
}

export default GalleryComponent;
