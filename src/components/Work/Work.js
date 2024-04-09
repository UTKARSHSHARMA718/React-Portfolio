import React, { useRef } from "react";
import Particles from "react-tsparticles";
import { useTranslation } from "react-i18next";
import { GrUserWorker } from "react-icons/gr";

import HeadingWithIcon from "../HeadingWithIcon/HeadingWithIcon";
import ProjectContainer from "../../Containers/ProjectContainer/ProjectContainer";
import ToolTip from "../ToolTip/ToolTip";
import { PROJECTS_SIDEBAR } from "../../Constants/Const";
import {
  PROJECT_DATA_HTML_CSS_JAVASCRIPT,
  PROJECT_DATA_MERN,
  PROJECT_DATA_NETXJS,
  PROJECT_DATA_REACTJS,
  PROJECT_DATA_REACT_NATIVE,
} from "../../Constants/ProjectsData";
import styles from "./Work.module.css";

const Work = (props) => {
  const { t } = useTranslation();
  const refArr = useRef([]);

  return (
    <div>
      <div className={styles.headingContainer}>
        <HeadingWithIcon
          heading={`${t("my")} ${t("projects")}`}
          icon={GrUserWorker}
        />
      </div>
      <div className={styles.sidebarAndContentContainer}>
        <div className={styles.projectsGroupContainer}>
          <ProjectContainer
            ref={(refValue) => (refArr.current[0] = refValue)}
            title={t("html_css_javascript")}
            data={PROJECT_DATA_HTML_CSS_JAVASCRIPT}
          />
          <ProjectContainer
            ref={(refValue) => (refArr.current[1] = refValue)}
            title={t("reactjs")}
            data={PROJECT_DATA_REACTJS}
          />
          <ProjectContainer
            ref={(refValue) => (refArr.current[2] = refValue)}
            title={t("react_native")}
            data={PROJECT_DATA_REACT_NATIVE}
          />
          <ProjectContainer
            ref={(refValue) => (refArr.current[3] = refValue)}
            title={t("mern")}
            data={PROJECT_DATA_MERN}
          />
          <ProjectContainer
            ref={(refValue) => (refArr.current[4] = refValue)}
            title={t("nextjs")}
            data={PROJECT_DATA_NETXJS}
          />
          <Particles
            id="tsparticles"
            init={props.particlesInit}
            loaded={props.particlesLoaded}
            options={props.particlesOptions}
          />
        </div>
        <div className={styles.sidebar}>
          {PROJECTS_SIDEBAR?.map((type, index) => {
            const Icon = type?.icon;
            return (
              <ToolTip data={type?.label}>
                <Icon
                  className={styles.icon}
                  size={40}
                  color="white"
                  onClick={() => refArr?.current?.[index]?.scrollIntoView()}
                  key={type?.label}
                />
              </ToolTip>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Work;
