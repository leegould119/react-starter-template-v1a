import React, { Component } from "react";
import Cookies from "cookies-js";

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasAcceptedCookiePolicy: false,
      modalIsOpen: false
    };
  }

  componentDidMount = () => {
    let hasCookies = Cookies.get("cookie-policy");

    if (hasCookies === "no" || hasCookies == undefined) {
      this.setState({ hasAcceptedCookiePolicy: false, modalIsOpen: true });
    } else {
      this.setState({ hasAcceptedCookiePolicy: true, modalIsOpen: false });
    }
  };

  setCookies = (event) => {
    let value = event.target.id;
    Cookies.set("cookie-policy", value, { expires: Infinity });
    this.openCloseModal();
  };

  openCloseModal = () => {
    console.log("open close me");
    this.setState({ modalIsOpen: !this.state.modalIsOpen });
  };

  render() {
    let { modalIsOpen } = this.state;

    return (
      <React.Fragment>
        {modalIsOpen ? (
          <div className="modal-wrapper">
            <div className="modal-container">
              <div className="modal-header">
                <h1>cookie policy</h1>
                <a onClick={this.openCloseModal}>&times;</a>
              </div>
              <div className="modal-body">
                <p>
                  Labore ut reprehenderit est laborum cupidatat ullamco nostrud
                  velit. Aliquip cupidatat nulla ex excepteur sunt veniam.
                  Veniam consequat fugiat labore exercitation exercitation sunt
                  do ut veniam consectetur sunt et.
                </p>
                <a
                  id="yes"
                  onClick={this.setCookies}
                  className="button orange-btn"
                >
                  yes
                </a>
                <a
                  id="no"
                  onClick={this.setCookies}
                  className="button orange-btn"
                  style={{ marginLeft: "25px" }}
                >
                  no
                </a>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </React.Fragment>
    );
  }
}

export default Modal;
