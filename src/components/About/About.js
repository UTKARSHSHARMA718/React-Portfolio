import React, { useEffect } from "react";

import Particles from "react-tsparticles";
import profilePic from "../../Assets/Images/Profile Pic LinkedIn with infinity.jpg";
import { motion } from "framer-motion";
import styles from "./About.module.css";

const About = (props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
    >
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
          <p className={styles.description}>
            Hi, Nice to meet you I'm Utkarsh Sharma, a 22 year-old web & app
            developer ,who also have interest in Graphic designing and video
            editing.Currently pursuing Bachelors in Information technology from
            IMS Engineering College,Ghaziabd. I enjoy reading books since it is
            one of the best possible source of information, I mostly read
            related to Physics ,Business,Startups, Psychology and Tech.
          </p>
          <h3 className={styles.heading}>Programming Skills</h3>
          <div className={styles.skills}>
            <div className={styles.PS}>
              <ul>
                <li>JAVA</li>
                <li>C</li>
                <li>JAVAScript</li>
                <li>React</li>
                <li>React-Native</li>
                <li>CSS</li>
                <li>Boostrap</li>
                <li>Figma</li>
                <li>UI/UX</li>
              </ul>
            </div>
            <div className={styles.PS}>
              <ul>
                <li>Docker</li>
                <li>SQL</li>
                <li>MongoDB</li>
                <li>HTML</li>
                <li>NODE js</li>
                <li>Express JS</li>
                <li>Data Structures</li>
                <li>Design and Analysis of Algorithms</li>
              </ul>
            </div>
          </div>
          <h3 className={styles.heading}>Other Skills</h3>
          <div className={styles.skills}>
            <div className={styles.PS}>
              <ul>
                <li>Photoshop</li>
                <li>Illustrator</li>
                <li>Blender</li>
                <li>After Effects</li>
              </ul>
            </div>

            <div className={styles.PS}>
              <ul>
                <li>Premier Pro</li>
                <li>Photography</li>
              </ul>
            </div>
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
              id="w3review"
              name="w3review"
              rows="4"
              cols="60"
              className={styles.textArea}
            ></textarea>
          </div>
          <button type="submit" class="btn btn-primary" id="form-submit">
            Submit
          </button>
        </div>
      </form>
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
