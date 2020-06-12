import React, { Component } from "react";

import { NextButton, BackButton } from "../carousel-v2";

class galleryModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
      pageNum: null,
      maxIndex: this.props.data.length - 1
    };
  }
  UNSAFE_componentWillReceiveProps = (thisProps) => {
    console.log("this imageID " + thisProps.imageId);
    let id = parseInt(thisProps.imageId);
    this.setState({ pageNum: id });
  };

  next = () => {
    let { pageNum, maxIndex } = this.state;
    console.log("image id : " + pageNum);
    console.log("max index . " + maxIndex);

    if (pageNum != maxIndex) {
      this.setState({ pageNum: pageNum + 1 }, function () {
        console.log("pagenum :" + this.state.pageNum);
      });
    } else {
      this.setState({ pageNum: 0 });
    }
  };

  prev = () => {
    let { pageNum, maxIndex } = this.state;
    console.log("image id : " + pageNum);

    if (pageNum != 0) {
      this.setState({ pageNum: pageNum - 1 }, function () {
        console.log("pagenum :" + this.state.pageNum);
      });
    } else {
      this.setState({ pageNum: maxIndex });
    }
  };
  render() {
    let { data, pageNum } = this.state;
    let { galleryItemClickHandler, openCloseModal, imageId } = this.props;

    // console.log("image id : " + imageId);

    let galleryItem = data.map((item, index) => {
      if (item.id == pageNum) {
        return (
          <React.Fragment key={index}>
            <div className="modal-header">
              <h1>{item.title}</h1>
              <a onClick={galleryItemClickHandler}>&times;</a>
            </div>
            <div className="modal-body">
              <img
                src={item.imageLink}
                style={{
                  //   backgroundImage: `url(${item.imageLink})`,
                  //   backgroundRepeat: "no-repeat",
                  width: "100%",
                  minHeight: "0px",
                  maxHeight: "1000px",
                  display: "block"
                }}
              />
            </div>
          </React.Fragment>
        );
      }
    });

    return (
      <React.Fragment>
        {openCloseModal ? (
          <div className="modal-wrapper">
            <div className="gallery-modal-container">
              <NextButton next={this.next} />
              {galleryItem}
              <BackButton prev={this.prev} />
            </div>
          </div>
        ) : (
          ""
        )}
      </React.Fragment>
    );
  }
}

export default galleryModal;
