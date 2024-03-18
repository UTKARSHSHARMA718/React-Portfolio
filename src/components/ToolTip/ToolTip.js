import React from "react";

import styles from "./ToolTip.module.css";

const ToolTip = ({ children, data }) => {
  
  return (
    <div className={styles.parentContainer}>
      <div dataToolTip={data} className={styles.container}>
        {children}
      </div>
    </div>
  );
};

export default ToolTip;
