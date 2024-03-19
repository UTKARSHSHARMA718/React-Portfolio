import React from "react";

import styles from "./TiltEffectContainer.module.css";

const TiltEffectContainer = ({ children }) => {
  const numberOfBoxes = 9;

  return (
    <div className={styles.tiltBoxWrap}>
      {new Array(numberOfBoxes)?.fill(1)?.map((item, index) => {
        return <span key={index} class={styles.tOver}></span>;
      })}
      <div className={styles.tiltBox}>{children}</div>
    </div>
  );
};

export default TiltEffectContainer;
