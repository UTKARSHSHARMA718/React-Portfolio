import React from "react";
import PropTypes from "prop-types";

import styles from "./ProjectCard.module.css";

const ProjectCard = ({ name, description, isComplete, link, imgSrc }) => {
  const MAX_CHARACTER_TO_SHOW = 50;
  const shouldShowEllipsis =
    isComplete || MAX_CHARACTER_TO_SHOW < description?.length;

  return (
    <div className={[styles["card"], styles["workcard"]].join(" ")}>
      <img
        src={imgSrc}
        className={[
          styles["card-img-top"],
          styles["imgWork"],
          styles["hcj"],
        ].join(" ")}
        alt="project image"
      />
      <div className={styles["card-body"]}>
        <h5 className={styles["card-title"]}>{name}</h5>
        <p className={styles["card-text"]}>
          {description?.substring(0, MAX_CHARACTER_TO_SHOW)}
          {shouldShowEllipsis ? "...." : ""}
        </p>
        <a
          className={[
            styles["workButton"],
            styles["btn"],
            styles["btn-warning"],
          ].join(" ")}
          href={link}
        >
          See
        </a>
      </div>
    </div>
  );
};

ProjectCard.defaultProps = {
  name: "",
  description: "",
  isComplete: false,
  link: "",
  imgSrc: "",
};

ProjectCard.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  isComplete: PropTypes.bool,
  link: PropTypes.string,
  imgSrc: PropTypes.string,
};

export default ProjectCard;
