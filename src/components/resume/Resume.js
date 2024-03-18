import React from "react";
import Particles from "react-tsparticles";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

import demoResumeImage from "./resumeImage.jpg";
import resume from "./Utkarsh Resume.pdf";
import "./resume.css";

const Resume = (props) => {
  const { t } = useTranslation();

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.5 }}
      >
        <div className="container">
          <h1>{t("resume")}</h1>
          <div className="resumeImg">
            <img src={demoResumeImage} alt="" className="img_of_resume" />
            <a
              href={resume}
              download="Utkarsh Sharma Resume"
              className="downloadButton fa fa-download"
            >
              {" "}
              {t("download")}
            </a>
          </div>
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
