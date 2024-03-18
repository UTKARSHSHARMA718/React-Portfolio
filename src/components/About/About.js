import React from "react";
import Particles from "react-tsparticles";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import ContactForm from "../../Containers/ContactForm/ContactForm";
import SkillsList from "../../Containers/SkillsList/SkillsList";
import profilePic from "../../Assets/Images/Profile Pic LinkedIn with infinity.jpg";
import { NON_TECHNICAL_SKILL, PROGRAMMING_SKILLS } from "../../Constants/Const";
import styles from "./About.module.css";

const About = (props) => {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
    >
      <div className={styles.parentContainer}>
        <div className={styles.container}>
          <h1 className={styles.heading}>
            {t("about")} {t("me")}
          </h1>
          <div className={styles.containerAbout}>
            <div className={styles.ppContainer}>
              <img
                className={styles.profilePic}
                src={profilePic}
                alt="profile-pic"
              />
            </div>
            <div className={styles.descriptionAndSkillContainer}>
              <p className={styles.description}>{t("profile_description")}</p>
              <SkillsList
                data={PROGRAMMING_SKILLS?.group1}
                heading={`${t("programming")} ${t("skills")}`}
                isRequiredTwoColumn
                data2={PROGRAMMING_SKILLS?.group2}
              />
              <SkillsList
                data={NON_TECHNICAL_SKILL?.group1}
                heading={`${t("other")} ${t("skills")}`}
              />
            </div>
          </div>
        </div>
        <ContactForm />
      </div>
      <Particles
        id="tsparticles"
        init={props.particlesInit}
        loaded={props.particlesLoaded}
        options={props.particlesOptions}
      />
    </motion.div>
  );
};

export default About;
