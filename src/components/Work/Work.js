import React, { useRef } from "react";
import Particles from "react-tsparticles";
import { useTranslation } from "react-i18next";
import { GrUserWorker } from "react-icons/gr";

import HeadingWithIcon from "../HeadingWithIcon/HeadingWithIcon";
import ProjectContainer from "../../Containers/ProjectContainer/ProjectContainer";
import ToolTip from "../ToolTip/ToolTip";
import { PROJECTS_DETAILS } from "../../Constants/ProjectsData";
import { PROJECTS_SIDEBAR } from "../../Constants/Const";
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
          {PROJECTS_DETAILS?.map((item, index) => {
            return (
              <ProjectContainer
                ref={(refValue) => (refArr.current[index] = refValue)}
                title={t(item?.title)}
                data={item?.data}
              />
            );
          })}
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
