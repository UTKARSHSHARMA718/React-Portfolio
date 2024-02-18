import React from "react";
import Particles from "react-tsparticles";

import {
  PROJECT_DATA_HTML_CSS_JAVASCRIPT,
  PROJECT_DATA_REACTJS,
  PROJECT_DATA_REACT_NATIVE,
} from "../../Constants/ProjectsData";
import styles from "./Work.module.css";

const Work = (props) => {
  return (
    <div>
      <div className={styles["project-section-heading-container"]}>
        <h1 className={styles["move-down-pro"]}>My Projects</h1>
      </div>
      <div className={styles["projects-container"]}>
        <div>
          <h2
            className={[
              styles["move-down-react"],
              styles["project-heading"],
            ].join(" ")}
          >
            HTML CSS JAVASCRIPT
          </h2>
        </div>
        <div>
          {PROJECT_DATA_HTML_CSS_JAVASCRIPT?.map((project) => {
            return (
              <div className={[styles["card"], styles["workcard"]].join(" ")}>
                <img
                  src={project?.imgLink}
                  className={[
                    styles["card-img-top"],
                    styles["imgWork"],
                    styles["hcj"],
                  ].join(" ")}
                  alt="project-image"
                />
                <div className={styles["card-body"]}>
                  <div>
                    <h5 className={styles["card-title"]}>{project?.name}</h5>
                    <p className={styles["card-text"]}>
                      {project?.description?.substring(0, 80)}
                      {!project?.isDescriptionComplete ? "...." : ""}
                    </p>
                  </div>
                  <div>
                    <a
                      className={[
                        styles["workButton"],
                        styles["btn-warning"],
                        styles["btn"],
                      ].join(" ")}
                      href={project?.viewLink}
                    >
                      Take a look
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles["projects-container"]}>
        <div>
          <h2
            className={[
              styles["move-down-react"],
              styles["project-heading"],
            ].join(" ")}
          >
            React JS
          </h2>
        </div>
        <div>
          {PROJECT_DATA_REACTJS?.map((project) => {
            return (
              <div className={[styles["card"], styles["workcard"]].join(" ")}>
                <img
                  src={project?.imgLink}
                  className={[
                    styles["card-img-top"],
                    styles["imgWork"],
                    styles["hcj"],
                  ].join(" ")}
                  alt="project image"
                />
                <div className={styles["card-body"]}>
                  <h5 className={styles["card-title"]}>{project?.name}</h5>
                  <p className={styles["card-text"]}>
                    {project?.description?.substring(0, 80)}
                    {!project?.isDescriptionComplete ? "...." : ""}
                  </p>
                  <a
                    className={[
                      styles["workButton"],
                      styles["btn"],
                      styles["btn-warning"],
                    ].join(" ")}
                    href={project?.viewLink}
                  >
                    Take a look
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles["projects-container"]}>
        <div>
          <h2 className={styles["project-heading"]}>React-Native</h2>
        </div>
        <div>
          {PROJECT_DATA_REACT_NATIVE?.map((project) => {
            return (
              <div className={[styles["card"], styles["workcard"]].join(" ")}>
                <img
                  src={project?.imgLink}
                  className={[
                    styles["card-img-top"],
                    styles["imgWork"],
                    styles["hcj"],
                  ].join(" ")}
                  alt="project image"
                />
                <div className={styles["card-body"]}>
                  <h5 className={styles["card-title"]}>{project?.name}</h5>
                  <p className={styles["card-text"]}>
                    {project?.description?.substring(0, 80)}
                    {!project?.isDescriptionComplete ? "...." : ""}
                  </p>
                  <a
                    className={[
                      styles["workButton"],
                      styles["btn"],
                      styles["btn-warning"],
                    ].join(" ")}
                    href={project?.viewLink}
                  >
                    Take a look
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Particles
        id="tsparticles"
        init={props.particlesInit}
        loaded={props.particlesLoaded}
        options={props.particlesOptions}
      />
    </div>
  );
};

export default Work;
