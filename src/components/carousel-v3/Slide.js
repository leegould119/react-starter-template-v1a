import React, { Component } from "react";

class Slide extends Component {
  render() {
    let { data, columns } = this.props;
    let cols = data.map((data, idx) => {
      return (
        <div key={idx} id={data.id} className={columns}>
          <h2>{data.title}</h2>
          <p>{data.body}</p>
        </div>
      );
    });
    return <div className="row">{cols}</div>;
  }
}
export default Slide;
