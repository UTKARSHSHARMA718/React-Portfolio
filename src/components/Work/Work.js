import React from "react";
import Particles from "react-tsparticles";
import { useTranslation } from "react-i18next";

import ProjectContainer from "../../Containers/ProjectContainer/ProjectContainer";
import {
  PROJECT_DATA_HTML_CSS_JAVASCRIPT,
  PROJECT_DATA_REACTJS,
  PROJECT_DATA_REACT_NATIVE,
} from "../../Constants/ProjectsData";
import styles from "./Work.module.css";

const Work = (props) => {
  const { t } = useTranslation();

  return (
    <div>
      <div className={styles.headingContainer}>
        <h1 className={styles["move-down-pro"]}>
          {t("my")} {t("projects")}
        </h1>
      </div>
      <div className={styles.projectsGroupContainer}>
        <ProjectContainer
          title={t("html_css_javascript")}
          data={PROJECT_DATA_HTML_CSS_JAVASCRIPT}
        />
        <ProjectContainer title={t("reactjs")} data={PROJECT_DATA_REACTJS} />
        <ProjectContainer
          title={t("react_native")}
          data={PROJECT_DATA_REACT_NATIVE}
        />
        <Particles
          id="tsparticles"
          init={props.particlesInit}
          loaded={props.particlesLoaded}
          options={props.particlesOptions}
        />
      </div>
    </div>
  );
};

export default Work;
