import React, { Component } from "react";

class twoColumnLayout extends Component {
  render() {
    return (
      <section className="container">
        <div className="row">
          <div className="col-6">
            <h2>title</h2>
            <p>
              Cillum elit ea aliqua dolore non id elit excepteur excepteur ad.
              Officia exercitation qui velit ut ea id sunt nulla est tempor
              occaecat. Laborum qui voluptate proident ipsum ut Lorem ea
              deserunt tempor et culpa veniam adipisicing. Voluptate et
              incididunt labore ad sunt culpa.
            </p>
          </div>
          <div className="col-6">
            <h2>title</h2>
            <p>
              Cillum elit ea aliqua dolore non id elit excepteur excepteur ad.
              Officia exercitation qui velit ut ea id sunt nulla est tempor
              occaecat. Laborum qui voluptate proident ipsum ut Lorem ea
              deserunt tempor et culpa veniam adipisicing. Voluptate et
              incididunt labore ad sunt culpa.
            </p>
          </div>
        </div>
      </section>
    );
  }
}
export default twoColumnLayout;
