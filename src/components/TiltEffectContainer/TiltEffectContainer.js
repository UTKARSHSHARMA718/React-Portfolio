import React from "react";

import styles from "./TiltEffectContainer.module.css";

const TiltEffectContainer = ({ children, onClick, isLink = false, href }) => {
  const numberOfBoxes = 9;

  const bodyContent = (
    <div className={styles.tiltBoxWrap} {...{ onClick }}>
      {new Array(numberOfBoxes)?.fill(1)?.map((item, index) => {
        return <span key={index} class={styles.tOver}></span>;
      })}
      <div className={styles.tiltBox}>{children}</div>
    </div>
  );

  if (isLink) {
    return (
      <a {...{ href }} className={styles.link} target="_blank">
        {bodyContent}
      </a>
    );
  }
  return bodyContent;
};

export default TiltEffectContainer;
