import React from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

import ProjectCard from "../../components/ProjectCard/ProjectCard";
import TiltEffectContainer from "../../components/TiltEffectContainer/TiltEffectContainer";
import styles from "./ProjectContainer.module.css";

const ProjectContainer = React.forwardRef(({ data, title }, ref) => {
  const { t } = useTranslation();

  return (
    <div className={styles.backgroundStylesContainer} {...{ref}}>
      <div className={styles["projects-container"]}>
        <div className={styles.headingContainer}>
          <h2
            className={[
              styles["move-down-react"],
              styles["project-heading"],
            ].join(" ")}
          >
            {title}
          </h2>
        </div>
        <div className={styles.projectCardContainer}>
          {data?.map((project) => {
            return (
              <TiltEffectContainer
                key={project?.imgLink}
                isLink
                href={project?.viewLink}
              >
                <ProjectCard
                  name={t(project?.name)}
                  description={t(project?.description)}
                  isComplete={!project?.isDescriptionComplete}
                  imgSrc={project?.imgLink}
                />
              </TiltEffectContainer>
            );
          })}
        </div>
      </div>
    </div>
  );
});

ProjectContainer.defaultProps = {
  data: [],
  title: "",
};

ProjectContainer.prototype = {
  data: PropTypes.array,
  title: PropTypes.string,
};

export default ProjectContainer;
