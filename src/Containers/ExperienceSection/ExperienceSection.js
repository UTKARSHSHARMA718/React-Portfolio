import React from "react";
import { useTranslation } from "react-i18next";

import ExperienceCard from "../../components/ExperienceCard/ExperienceCard";
import useWindowDimension from "../../customHooks/useWindowDimensions";
import { EXPERIENCE_DATA } from "../../Constants/Const";
import styles from "./ExperienceSection.module.css";

const ExperienceSection = () => {
  const { t } = useTranslation();
  const { windowSize } = useWindowDimension();
  const isMobileScreen = windowSize?.width <= 1024;

  return (
    <div className={styles.parentContainer}>
      <h2>{t("experienceSection")}</h2>
      <div className={styles.container}>
        {EXPERIENCE_DATA?.map((expreince, index) => {
          return (
            <ExperienceCard
              image={expreince?.image}
              date={expreince?.date}
              desc={t(expreince?.description)}
              title={t(expreince?.title)}
              isRight={index % 2 === 1 || isMobileScreen}
              customContainerStyles={isMobileScreen ? styles.leftAlign : ""}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ExperienceSection;
