import React from "react";
import PropTypes from "prop-types";

import styles from "./CustomButton.module.css";

const CustomButton = ({ customStyles, onClick, text }) => {
  return (
    <button
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
};

CustomButton.propTypes = {
  customStyles: PropTypes.string,
  onClick: PropTypes.func,
  text: PropTypes.string,
};

export default CustomButton;
