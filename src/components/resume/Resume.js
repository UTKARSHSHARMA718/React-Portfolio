import React from "react";
import Particles from "react-tsparticles";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

import TiltEffectContainer from "../TiltEffectContainer/TiltEffectContainer";
import resume from "./Utkarsh Resume.pdf";
import resumeImage from "./resumeImage.jpg";
import styles from "./resume.module.css";

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
        <div className={styles.container}>
          <h1>{t("resume")}</h1>
          <TiltEffectContainer>
            <div className={styles.resumeImgContainer}>
              <img src={resumeImage} alt="" className={styles.resumeImage} />
            </div>
          </TiltEffectContainer>
          <a
            href={resume}
            download="Utkarsh Sharma Resume"
            className={[styles.downloadButton, "fa fa-download"].join(" ")}
          >
            {" "}
            {t("download")}
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
