import React from "react";
import { useTranslation } from "react-i18next";
import { GrContactInfo } from "react-icons/gr";

import ExperienceSection from "../../Containers/ExperienceSection/ExperienceSection";
import HeadingWithIcon from "../HeadingWithIcon/HeadingWithIcon";
import SkillsList from "../../Containers/SkillsList/SkillsList";
import profilePic from "../../Assets/Images/Profile Pic LinkedIn with infinity.jpg";
import withParticals from "../../HOC/withParticals/withParticals";
import { NON_TECHNICAL_SKILL, PROGRAMMING_SKILLS } from "../../Constants/Const";
import styles from "./About.module.css";

const About = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.parentContainer}>
      <div className={styles.container}>
        <HeadingWithIcon
          heading={`${t("about")} ${t("me")}`}
          icon={GrContactInfo}
        />
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
            <ExperienceSection />
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
    </div>
  );
};

export default withParticals(About);
