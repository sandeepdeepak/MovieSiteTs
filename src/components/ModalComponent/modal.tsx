import React from "react";
import "./modal.scss";
import PropTypes from "prop-types";

const ModalComponent = (props: any) => {
  const onClose = (e: any) => {
    props.onClose && props.onClose(e);
  };
  if (props.show) {
    return null;
  }
  return (
    <div className="modal" id="modal">
      <h2>{props.title}</h2>
      <div className="content">{props.children}</div>
      <div className="actions">
        <button className="toggle-button" onClick={onClose}>
          Add Movie
        </button>
      </div>
    </div>
  );
};

export default ModalComponent;
