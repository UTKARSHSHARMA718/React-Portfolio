import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SOCIAL_ICONS } from "../../Constants/Const";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <h6>Made with ❤️ by Utkarsh Sharma</h6>
      <div class={styles.socialsIconsContainer}>
        {SOCIAL_ICONS?.map((item) => {
          return (
            <a href={item?.href}>
              <FontAwesomeIcon className={styles.socials} icon={item?.icon} />
            </a>
          );
        })}
      </div>
    </footer>
  );
};

export default Footer;
