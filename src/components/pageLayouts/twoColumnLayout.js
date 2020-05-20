import React, { Component } from "react";

class twoColumnLayout extends Component {
  render() {
    let { params } = this.props;
    let placeholderBody =
      "Cillum elit ea aliqua dolore non id elit excepteur excepteur ad. Officia exercitation qui velit ut ea id sunt nulla est tempor occaecat. Laborum qui voluptate proident ipsum ut Lorem ea deserunt tempor et culpa veniam adipisicing. Voluptate e incididunt labore ad sunt culpa.";
    return (
      <section className="container">
        <div className="row">
          <div className="col-6">
            <h2 className={params.fontColors.lightOrange}>
              {params.title ? params.title : "placeholder"}
            </h2>
            <p>{params.bodyText ? params.bodyText : placeholderBody}</p>
          </div>
          <div className="col-6">
            <h2 className={params.fontColors.darkGrey}>
              {params.title1 ? params.title1 : "placeholder"}
            </h2>
            <p>{params.bodyText1 ? params.bodyText1 : placeholderBody}</p>
          </div>
        </div>
      </section>
    );
  }
}
export default twoColumnLayout;
