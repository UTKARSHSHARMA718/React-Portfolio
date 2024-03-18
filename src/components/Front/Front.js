import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import Particles from "react-tsparticles";
// import { loadFull } from "tsparticles";
import $ from "jquery";
import jQuery from "jquery";
import "./Front.css";
import "../index.css";

const Front = (props) => {
  const {t}=useTranslation();

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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
      style={{ flex: 1, display: "flex" }}
    >
      <div className="welcome">
        <div className="content">
          <h1 className="introduction">
            {t("hi")} {t("im")}
          </h1>
          <h1 className="introduction">
            {/* TODO: bring them inside single kay value */}
            {t("utkarsh")} {t("sharma")}
          </h1>
          <h1 className="introduction">{t("mini_intro")}</h1>
        </div>
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

export default Front;
