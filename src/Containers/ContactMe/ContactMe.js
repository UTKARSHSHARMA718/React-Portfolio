import React from "react";

import ContactDetails from "../ContactDetails/ContactDetails";
import ContactForm from "../ContactForm/ContactForm";
import withParticals from "../../HOC/withParticals/withParticals";
import useWindowDimension from "../../customHooks/useWindowDimensions";
import BlackHole from "../../Assets/Images/black_hole-removebg-preview.png";
import styles from "./ContactMe.module.css";
import { useTranslation } from "react-i18next";

const ContactMe = () => {
  const {t} = useTranslation();
  const { windowSize } = useWindowDimension();
  const isMobileScreen = windowSize?.width <= 1024;

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={styles.imageAndDetailsContainer}>
          <div className={styles.detailsAndIntroContainer}>
            <div className={styles.headingAndImageContainer}>
              <h2>{t("contact")} {t("me")}</h2>
              <p className={styles.text}>{t("blackHolesInfo")}</p>
              {isMobileScreen && (
                <img
                  src={BlackHole}
                  alt="black-hole-img"
                  className={styles.banner}
                />
              )}
            </div>
            <ContactDetails
              customContainerStyles={styles.transparentBg}
              customParentContainerStyles={styles.transparentBg}
              customHeadingStyles={styles.heading}
            />
          </div>
          {!isMobileScreen && (
            <img
              src={BlackHole}
              alt="black-hole-img"
              className={styles.banner}
            />
          )}
        </div>
        <ContactForm
          customContainerStyles={styles.transparentBg}
          customHeadingStyles={styles.heading}
        />
      </div>
    </div>
  );
};

export default withParticals(ContactMe);
