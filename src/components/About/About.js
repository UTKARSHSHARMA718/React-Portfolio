import React from "react";
import Particles from "react-tsparticles";
import { motion } from "framer-motion";

import CustomButton from "../CustomButton/CustomButton";
import SkillsList from "../../Containers/SkillsList/SkillsList";
import profilePic from "../../Assets/Images/Profile Pic LinkedIn with infinity.jpg";
import {
  MY_PROFILE_DESCRIPTIONS,
  NON_TECHNICAL_SKILL,
  PROGRAMMING_SKILLS,
} from "../../Constants/Const";
import styles from "./About.module.css";

const About = (props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
    >
      <div className={styles.parentContainer}>
        <div className={styles.container}>
          <h1 className={styles.heading}>About Me</h1>
          <div className={styles.containerAbout}>
            <div className={styles.ppContainer}>
              <img
                className={styles.profilePic}
                src={profilePic}
                alt="profile-pic"
              />
            </div>
            <div className={styles.descriptionAndSkillContainer}>
              <p className={styles.description}>{MY_PROFILE_DESCRIPTIONS}</p>
              <SkillsList
                data={PROGRAMMING_SKILLS?.group1}
                heading="Programming Skills"
                isRequiredTwoColumn
                data2={PROGRAMMING_SKILLS?.group2}
              />
              <SkillsList
                data={NON_TECHNICAL_SKILL?.group1}
                heading="Other Skills"
              />
            </div>
          </div>
        </div>
        <form
          action="https://formspree.io/f/xnqwwdwz"
          method="POST"
          className={styles.formContainer}
        >
          <h2>Contact Me</h2>
          <div className={styles["form-group"]}>
            <label for="exampleInputEmail1">Name</label>
            <input
              required
              type="text"
              class="form-control"
              id="name"
              aria-describedby="emailHelp"
              placeholder="Enter name"
            />
          </div>
          <div className={styles["form-group"]}>
            <label for="exampleInputEmail1">Email address</label>
            <div className={styles.fullWidth}>
              <input
                required
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
              <small id="emailHelp" className={styles.bottomText}>
                We'll never share your email with anyone else.
              </small>
            </div>
          </div>
          <div className={styles["form-group"]}>
            <label for="exampleInputEmail1">Decription</label>
            <div className={styles["form-group"]}>
              <textarea
                required
                rows="4"
                cols="60"
                className={styles.textArea}
              ></textarea>
            </div>
          </div>
          <CustomButton text="Submit" type="submit" />
        </form>
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
