import React from "react";

import infinitySpinner from "../../Assets/Images/Infinity-1s-200px.gif";
import styles from "./CustomLoaderStyles.module.css";

const CustomLoader = ({ size = "medium" }) => {
  return (
    <div
      class={[
        styles.loaderContainer,
        size === "small" ? styles.height20vh : "",
      ].join(" ")}
    >
      <img
        src={infinitySpinner}
        alt="loading spinner"
        className={styles[size]}
      />
    </div>
  );
};

export default CustomLoader;
