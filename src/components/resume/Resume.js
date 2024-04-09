import React from "react";
import { useTranslation } from "react-i18next";
import { RiNewspaperLine } from "react-icons/ri";

import HeadingWithIcon from "../HeadingWithIcon/HeadingWithIcon";
import TiltEffectContainer from "../TiltEffectContainer/TiltEffectContainer";
import withParticals from "../../HOC/withParticals/withParticals";
import resume from "./Utkarsh Resume.pdf";
import resumeImage from "./resumeImage.jpg";
import styles from "./resume.module.css";

const Resume = (props) => {
  const { t } = useTranslation();

  return (
    <>
      <div className={styles.container}>
        <HeadingWithIcon icon={RiNewspaperLine} heading={t("resume")}/>
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
    </>
  );
};

export default withParticals(Resume);
