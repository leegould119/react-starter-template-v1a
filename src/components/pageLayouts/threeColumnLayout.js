import React, { Component } from "react";

import Button from "../elements/aButton";

class threeColumnLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stateVals: []
    };
  }

  componentDidMount = () => {
    this.setState({ stateVals: this.props.vals });
  };

  render() {
    let { vals } = this.props;
    let { stateVals } = this.state;

    console.log("sate vals :" + JSON.stringify(stateVals));

    let pageContent = vals.map((data, idx) => {
      console.log("data : " + data.text);
      return (
        <div key={idx} id={data.id} className={data.columnClasses}>
          <h2>{data.title ? data.title : "placeholde text"}</h2>
          {data.body ? data.body : "placeholder text"}
          {(() => {
            if (data.button == true) {
              return (
                <Button
                  link={data.link}
                  classes={data.classes}
                  buttonTitle={data.buttonTitle}
                />
              );
            }
          })()}
        </div>
      );
    });

    return (
      <section>
        <div className="container">
          <div className="row">{pageContent}</div>
        </div>
      </section>
    );
  }
}
export default threeColumnLayout;
