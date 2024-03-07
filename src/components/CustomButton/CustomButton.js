import React from "react";
import PropTypes from "prop-types";

import styles from "./CustomButton.module.css";

const CustomButton = ({ customStyles, onClick, text, type }) => {

  return (
    <button
      {...{type}}
      className={[styles.btn, customStyles].join(" ")}
      onClick={() => {
        onClick && onClick();
      }}
    >
      {text}
    </button>
  );
};

CustomButton.defaultProps = {
  customStyles: "",
  onClick: () => {},
  text: "",
  type: "button",
};

CustomButton.propTypes = {
  customStyles: PropTypes.string,
  onClick: PropTypes.func,
  text: PropTypes.string,
  type: PropTypes.string,
};

export default CustomButton;
