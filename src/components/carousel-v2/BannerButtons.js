import React, { Component } from "react";

class BannerButtons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data
      // isActive: false
    };
  }
  componentWillMount = () => {
    // this.addActiveClass();
  };

  addActiveClass = () => {
    // let { isActive } = this.state;
    this.setState({ isActive: !this.isActive });
  };

  render() {
    const { data } = this.state;
    let { click } = this.props;

    let buttons = data.map((data, idx) => {
      return (
        <a
          title={data.title}
          className={
            data.isActive ? "banner-buttons " : "banner-buttons active"
          }
          key={data.id}
          id={data.id}
          onClick={this.addActiveClass}
        />
      );
    });

    return <div className="banner-buttons-wrapper">{buttons}</div>;
  }
}

export default BannerButtons;
