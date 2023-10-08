import React from "react";

import Particles from "react-tsparticles";
import demoResumeImage from "./resumeImage.jpg";
import resume from "./Latest_Updated_resume.pdf";
import { motion } from "framer-motion";
import "./resume.css";

const Resume = (props) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.5 }}
      >
        <div className="resumeImg">
          <img src={demoResumeImage} alt="" className="img_of_resume" />
          <a
            href={resume}
            download="resume"
            className="downloadButton fa fa-download"
          >
            {" "}
            Download
          </a>
        </div>
        <Particles
          id="tsparticles"
          init={props.particlesInit}
          loaded={props.particlesLoaded}
          options={props.particlesOptions}
        />
      </motion.div>
    </>
  );
};

export default Resume;
