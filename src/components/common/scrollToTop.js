import React, { Component } from "react";

export default class ScrollToTop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false
    };
  }
  componentDidMount = () => {
    let scrollComponent = this;
    document.addEventListener("scroll", function (e) {
      scrollComponent.toggleVsisible();
    });
  };
  toggleVsisible = () => {
    if (window.pageYOffset > 150) {
      this.setState({ isVisible: true });
    } else {
      this.setState({ isVisible: false });
    }
  };
  scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  render() {
    const { isVisible } = this.state;
    return (
      <div className="scroll-to-top">
        {isVisible && (
          <div className="dark-grey" onClick={() => this.scrollToTop()}></div>
        )}
      </div>
    );
  }
}
