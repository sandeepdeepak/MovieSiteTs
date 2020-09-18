import React, { Component, createRef } from "react";
import "./button.scss";

const ButtonComponent = (props: any) => {
  const buttonRef: any = createRef();

  return (
    <button
      ref={buttonRef}
      className="primary-style"
      style={{
        background: props.isFocused ? props.borderColor : props.bgColor,
        color: props.color,
        width: props.width,
        height: props.height,
        border: `2px solid ${props.borderColor}`,
      }}
      onClick={props.onClick}
    >
      {props.buttonText}
    </button>
  );
};
export default ButtonComponent;
