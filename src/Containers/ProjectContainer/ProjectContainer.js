import React from "react";
import PropTypes from "prop-types";

import ProjectCard from "../../components/ProjectCard/ProjectCard";
import styles from "./ProjectContainer.module.css";

const ProjectContainer = ({ data, title }) => {
  return (
    <div className={styles["projects-container"]}>
      <div>
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
              name={project?.name}
              description={project?.description}
              link={project?.viewLink}
              isComplete={!project?.isDescriptionComplete}
              imgSrc={project?.imgLink}
            />
          );
        })}
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
