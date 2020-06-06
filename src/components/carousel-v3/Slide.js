import React, { Component } from "react";
import Button from "../../components/elements/aButton";

class Slide extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSlice: this.props.data
    };
  }

  render() {
    let { data, columns } = this.props;
    let cols = data.map((data, idx) => {
      return (
        <div key={idx} id={data.id} className={columns}>
          {/* {(() => {
            if (data.images.img == "") {
              return null;
            } else {
              return <img src={data.images.img} />;
            }
          })()} */}
          {data.images.img ? (
            <div style={{ margin: "0 auto", width: "150px", height: "150px" }}>
              <img
                style={{ width: "100%", height: "100%" }}
                src={data.images.img}
              />
            </div>
          ) : (
            ""
          )}
          {data.icons.icon ? (
            <div
              style={{
                margin: "0 auto",
                width: "40px",
                height: "40px",
                display: "block",
                backgroundRepeat: "no-repeat",
                backgroundImage: `url(${data.icons.icon})`
              }}
            />
          ) : (
            ""
          )}
          <h2>{data.title}</h2>
          <p>{data.description}</p>
          {data.button.hasButton ? (
            <Button
              link=""
              classes={"button " + data.button.buttonType}
              buttonTitle={data.button.text}
              target={""}
              buttonId={data.id}
              handleClick={this.props.toggleShowHideElement}
            />
          ) : (
            ""
          )}
        </div>
      );
    });
    return <div className="row">{cols}</div>;
  }
}
export default Slide;
