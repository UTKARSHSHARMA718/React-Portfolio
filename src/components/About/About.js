import React, { useEffect } from "react";

import { Link } from "react-router-dom";

import pp from "./profile pic portfolio.jpg";
import "./About.css";

import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { motion } from "framer-motion";


// import AnimatePage from "../../AnimatePage";

const About = (props) => {


  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1}}
    exit={{ opacity: 0 }}
    transition={{duration:1.5}}
  >
      <div className="container">
        <h1 className="heading">About Me</h1>
        <div className="containerAbout">
          <div className="ppContainer">
            <img className="PP" src={pp} alt="" />
          </div>

          <p className="description">
            Hi, Nice to meet you I'm Utkarsh Sharma, a 20 year-old web & app
            developer ,who also have interest in Graphic designing and video
            editing.Currently pursuing Bachelors in Information technology from
            IMS Engineering College,Ghaziabd. I enjoy reading books since it is
            one of the best possible source of information, I mostly read
            related to Physics ,Business,Startups, Psychology and Tech.
          </p>

          <h3 className="heading">Programming Skills</h3>

          <div className="skills">
            <div className="PS">
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

            <div className="PS">
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

          <h3 className="heading">Other Skills</h3>

          <div className="skills">
            <div className="PS">
              <ul>
                <li>Photoshop</li>
                <li>Illustrator</li>
                <li>Blender</li>
                <li>After Effects</li>
              </ul>
            </div>

            <div className="PS">
              <ul>
                <li>Premier Pro</li>
                <li>Photography</li>
              </ul>
            </div>
          </div>
        </div>
      </div>


    <form action="https://formspree.io/f/xnqwwdwz" method="POST">
    <h2>Contact Me</h2>
    <div class="form-group">
      <label for="exampleInputEmail1">Name</label>
      <input type="text" class="form-control" id="name" aria-describedby="emailHelp" placeholder="Enter name"/>
     
    </div>
    <div class="form-group">
      <label for="exampleInputEmail1">Email address</label>
      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
      <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>
      <label for="exampleInputEmail1">Decription</label>
    <div class="form-group">
      <textarea id="w3review" name="w3review" rows="4" cols="60">

      </textarea>
     
    </div>
   
   
    <button type="submit" class="btn btn-primary" id="form-submit">Submit</button>

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
