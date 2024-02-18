import React from "react";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import styles from "./ProjectContainer.module.css";

const ProjectContainer = ({ title, data }) => {
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

export default ProjectContainer;
