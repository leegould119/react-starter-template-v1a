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
      noMoreDataToRetrieve: false
    };
  }

  componentDidMount = () => {
    window.addEventListener("scroll", this.handleScroll);
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
    let { dataSlice } = this.state;

    let gallery = dataSlice.map((item, index) => {
      return (
        <React.Fragment key={index}>
          <div className="gallery-wrapper">
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
              <span className="icon" />
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
