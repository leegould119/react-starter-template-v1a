import React from "react";
import PropTypes from "prop-types";

functionalButton.propTypes = {};

const functionalButton = (props) => {
  return (
    <React.Fragment>
      {props.isVisible ? (
        <input id={props.id} name={props.name} onClick={props.submitHandler} />
      ) : (
        ""
      )}
    </React.Fragment>
  );
};

export default functionalButton;
