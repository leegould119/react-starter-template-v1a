import React, { Component } from "react";

class BannerButtons extends Component {
  render() {
    const { data } = this.props;

    let buttons = data.map((data, idx) => {
      return (
        <a
          title={data.title}
          className="banner-buttons"
          key={data.id}
          id={"button" + data.id}
        />
      );
    });

    return <div className="banner-buttons-wrapper">{buttons}</div>;
  }
}

export default BannerButtons;
