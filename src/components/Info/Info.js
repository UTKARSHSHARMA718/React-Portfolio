import React from "react";

import styles from "./Info.module.css";

const Info = ({
  label,
  value,
  linkHref,
  isEmail,
  icon: Icon,
  size = 20,
  color,
}) => {
  return (
    <div className={styles.info}>
      <div className={styles.iconAndLabelContainer}>
        {Icon && <Icon {...{ size }} className={color} />}
        <p className={styles.label}>{label} :</p>
      </div>
      {linkHref && (
        <a href={linkHref} target="_blank" className={styles.link}>
          {value}
        </a>
      )}
      {isEmail && (
        <a href={`mailto:${value}`} className={styles.link}>
          {value}
        </a>
      )}
      {!isEmail && !linkHref && <p className={styles.value}>{value}</p>}
    </div>
  );
};

export default Info;
