import React from "react";
import $ from "jquery";
import jQuery from "jquery";
import { useTranslation } from "react-i18next";

// import { loadFull } from "tsparticles";
import withParticals from "../../HOC/withParticals/withParticals";
import styles from './Front.module.css'
import "../index.css";

const Front = () => {
  const { t } = useTranslation();

  jQuery(document).ready(function () {
    $("h1").mousemove(function (e) {
      var rXP = e.pageX - this.offsetLeft - $(this).width() / 2;
      var rYP = e.pageY - this.offsetTop - $(this).height() / 2;
      $("h1").css(
        "text-shadow",
        +rYP / 10 +
          "px " +
          rXP / 80 +
          "px rgba(227,6,19,.8), " +
          rYP / 8 +
          "px " +
          rXP / 60 +
          "px rgba(255,237,0,1), " +
          rXP / 70 +
          "px " +
          rYP / 12 +
          "px rgba(0,159,227,.7)"
      );
    });
  });

  return (
    <div className={styles.container}>
      <div className={styles.welcome}>
        <div className={styles.content}>
          <h1 className={styles.introduction}>
            {t("hi")} {t("im")}
          </h1>
          <h1 className={styles.introduction}>
            {/* TODO: bring them inside single kay value */}
            {t("utkarsh")} {t("sharma")}
          </h1>
          <h1 className={styles.introduction}>{t("mini_intro")}</h1>
        </div>
      </div>
    </div>
  );
};

export default withParticals(Front);
