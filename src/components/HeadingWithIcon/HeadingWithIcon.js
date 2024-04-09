import React from "react";

import styles from "./HeadingWithIcon.module.css";

const HeadingWithIcon = ({
  icon: Icon,
  heading,
  size = 50,
  customIconStyles,
}) => {
  return (
    <div className={styles.iconAndHeadingContainer}>
      {Icon && (
        <Icon
          {...{ size }}
          className={[styles.icon, customIconStyles].join(" ")}
        />
      )}
      <h1 className={styles.heading}>{heading}</h1>
    </div>
  );
};

export default HeadingWithIcon;
