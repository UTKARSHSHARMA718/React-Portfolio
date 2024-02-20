import React from "react";
import Particles from "react-tsparticles";

import ProjectContainer from "../../Containers/ProjectContainer/ProjectContainer";
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
      <ProjectContainer
        title={"HTML CSS JAVASCRIPT"}
        data={PROJECT_DATA_HTML_CSS_JAVASCRIPT}
      />
      <ProjectContainer title={"React JS"} data={PROJECT_DATA_REACTJS} />
      <ProjectContainer
        title={"React Native"}
        data={PROJECT_DATA_REACT_NATIVE}
      />
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
