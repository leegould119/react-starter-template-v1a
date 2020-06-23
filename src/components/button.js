import React from "react";

const Button = (props) => {
  return (
    <a
      id={props.id}
      href={props.link}
      target={props.target ? props.target : "_parent"}
      className={props.classes}
      onClick={props.togglePanel}
    >
      {props.buttonTitle}
    </a>
  );
};

export default Button;
