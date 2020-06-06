import React, { Component } from "react";

class detectDimension extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screenWidth: null
    };
  }
  updateWindowDimension = () =>
    this.setState({ screenWidth: window.innerWidth });

  componentDidMount = () => {
    window.addEventListener("resize", this.updateWindowDimension);
    return this.state.screenWidth;
  };

  componentWillUnmount = () => {
    window.removeEventListener("resize", this.updateWindowDimension);
    return this.state.screenWidth;
  };

  render() {
    let { screenWidth } = this.state;
    return <p>{screenWidth}</p>;
  }
}
export default detectDimension;
