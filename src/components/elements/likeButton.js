import React, { Component } from "react";

class likeButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      likeToggle: false
    };
  }
  likeItemClickHandler = (e) => {
    e.preventDefault();
    let id = e.target.id;
    console.log("item id : " + id);
    this.setState({ likeToggle: !this.state.likeToggle });
  };
  render() {
    let { id } = this.props;
    let { likeToggle } = this.state;
    return (
      <React.Fragment>
        <span
          id={"likeButton" + id}
          //   className="galleryLikeButton"
          className={
            likeToggle ? "galleryLikeButton active" : "galleryLikeButton"
          }
          onClick={this.likeItemClickHandler}
        />
      </React.Fragment>
    );
  }
}

export default likeButton;
