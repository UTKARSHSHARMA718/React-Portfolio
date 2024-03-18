import React from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

import ProjectCard from "../../components/ProjectCard/ProjectCard";
import styles from "./ProjectContainer.module.css";

const ProjectContainer = ({ data, title }) => {
  const { t } = useTranslation();

  return (
    <div className={styles.backgroundStylesContainer}>
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
              <ProjectCard
                key={project?.imgLink}
                name={t(project?.name)}
                description={t(project?.description)}
                link={project?.viewLink}
                isComplete={!project?.isDescriptionComplete}
                imgSrc={project?.imgLink}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

ProjectContainer.defaultProps = {
  data: [],
  title: "",
};

ProjectContainer.prototype = {
  data: PropTypes.array,
  title: PropTypes.string,
};

export default ProjectContainer;
