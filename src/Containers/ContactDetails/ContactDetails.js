import React from "react";
import { useTranslation } from "react-i18next";

import Info from "../../components/Info/Info";
import { CONTACT_DETAILS } from "../../Constants/Const";
import styles from "./ContactDetails.module.css";

const ContactDetails = ({
  customContainerStyles,
  customParentContainerStyles,
  customHeadingStyles,
}) => {
  const {t} = useTranslation();

  return (
    <div
      className={[styles.parentContainer, customParentContainerStyles].join(
        " "
      )}
    >
      <h2 className={customHeadingStyles}>{t("details")}</h2>
      <div className={[styles.container, customContainerStyles].join(" ")}>
        {CONTACT_DETAILS?.map((details) => {
          return (
            <Info
              label={t(details?.label)}
              value={t(details?.value)}
              isEmail={details?.isEmail}
              linkHref={details?.href}
              icon={details?.icon}
              color={styles.iconColor}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ContactDetails;
