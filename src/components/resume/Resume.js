import React from "react";
import demo from "./resumeImage.PNG";
import resume from "./Utkarsh__Sharma__Resume (1).pdf";
import "./resume.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { download } from "@fortawesome/free-brands-svg-icons";

import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { motion } from "framer-motion";
// import AnimatePage from "../../AnimatePage";



const Resume = (props) => {
  return (
    <>
       <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1}}
        exit={{ opacity: 0 }}
        transition={{duration:1.5}}
      >

      <div className="resumeImg">
        <img src={demo} alt="" className="img_of_resume" />
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
