import React from "react";
import styles from "./CustomButton.module.css"

const CustomButton = ({ text, onClick, customStyles }) => {
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

export default CustomButton;
