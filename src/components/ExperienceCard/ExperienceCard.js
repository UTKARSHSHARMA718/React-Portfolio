import React from "react";

import styles from "./ExperienceCard.module.css";

const ExperienceCard = ({
  title,
  desc,
  date,
  image,
  isRight,
  customContainerStyles,
}) => {
  const getDescription = () => {
    const stringArr = desc?.split("\n");
    return stringArr?.map((str) => {
      return <p className={styles.desc}>{str}</p>;
    });
  };

  return (
    <div
      className={[
        styles.container,
        isRight ? styles.right__card : styles.left__card,
        customContainerStyles,
      ].join(" ")}
    >
      <div className={styles.box}>
        <div
          className={!isRight ? styles.left__arrow : styles.right__arrow}
        ></div>
        <div className={styles.imgAndTitleContainer}>
          <img
            src={image}
            alt="experience"
            onError={({ currentTarget }) => {
              currentTarget.onerror = null; // prevents looping
              currentTarget.src="https://i2.pngimg.me/thumb/f/720/m2i8d3i8N4d3N4K9.jpg";
            }}
            className={[
              styles.img,
              isRight ? styles.imge__right : styles.imge__left,
            ].join(" ")}
          />
          <p className={styles.title}>{title}</p>
          <p className={styles.date}>({date})</p>
        </div>
        <div>{getDescription()}</div>
      </div>
    </div>
  );
};

export default ExperienceCard;
