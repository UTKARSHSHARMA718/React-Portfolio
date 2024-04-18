import React from "react";

import useWindowDimension from "../../customHooks/useWindowDimensions";
import styles from "./ToolTip.module.css";

const ToolTip = ({ children, data }) => {
  const { windowSize } = useWindowDimension();
  const isMobileScreen = windowSize?.width <= 768;

  return (
    <div className={styles.parentContainer}>
      <div
        datatooltip={data}
        className={isMobileScreen ? "" : styles.container}
      >
        {children}
      </div>
    </div>
  );
};

export default ToolTip;
