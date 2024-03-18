import React from "react";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import ToolTip from "../ToolTip/ToolTip";
import { SOCIAL_ICONS } from "../../Constants/Const";
import styles from "./Footer.module.css";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className={styles.footer}>
      <h6>{t("footer_text")}</h6>
      <div className={styles.socialsIconsContainer}>
        {SOCIAL_ICONS?.map((item) => {
          return (
            <a
              href={item?.href}
              key={item?.href}
            >
              <ToolTip data={item?.label}>
                <FontAwesomeIcon className={styles.socials} icon={item?.icon} />
              </ToolTip>
            </a>
          );
        })}
      </div>
    </footer>
  );
};

export default Footer;
