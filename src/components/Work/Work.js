import React from "react";
import Particles from "react-tsparticles";

import "./Work.css";
import {
  PROJECT_DATA_HTML_CSS_JAVASCRIPT,
  PROJECT_DATA_REACTJS,
  PROJECT_DATA_REACT_NATIVE,
} from "../../Constants/ProjectsData";

const Work = (props) => {
  return (
    <>
      <div>
        <div className="project-section-heading-container">
          <h1 className="move-down-pro">My Projects</h1>
        </div>
        <div className="projects-container">
          <div>
            <h2 className="move-down-react project-heading">
              HTML CSS JAVASCRIPT
            </h2>
          </div>
          <div>
            {PROJECT_DATA_HTML_CSS_JAVASCRIPT?.map((project) => {
              return (
                <div className="card workcard">
                  <img
                    src={project?.imgLink}
                    className="card-img-top imgWork hcj"
                    alt="project image"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{project?.name}</h5>
                    <p className="card-text">
                      {project?.description?.substring(0, 80)}
                      {!project?.isDescriptionComplete ? "...." : ""}
                    </p>
                    <a
                      className="workButton btn btn-warning"
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
        <div className="projects-container">
          <div>
            <h2 className="move-down-react project-heading">React JS</h2>
          </div>
          <div>
            {PROJECT_DATA_REACTJS?.map((project) => {
              return (
                <div className="card workcard">
                  <img
                    src={project?.imgLink}
                    className="card-img-top imgWork hcj"
                    alt="project image"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{project?.name}</h5>
                    <p className="card-text">
                      {project?.description?.substring(0, 80)}
                      {!project?.isDescriptionComplete ? "...." : ""}
                    </p>
                    <a
                      className="workButton btn btn-warning"
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
        <div className="projects-container">
          <div>
            <h2 className="project-heading">React-Native</h2>
          </div>
          <div>
            {PROJECT_DATA_REACT_NATIVE?.map((project) => {
              return (
                <div className="card workcard">
                  <img
                    src={project?.imgLink}
                    className="card-img-top imgWork hcj"
                    alt="project image"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{project?.name}</h5>
                    <p className="card-text">
                      {project?.description?.substring(0, 80)}
                      {!project?.isDescriptionComplete ? "...." : ""}
                    </p>
                    <a
                      className="workButton btn btn-warning"
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
    </>
  );
};

export default Work;
