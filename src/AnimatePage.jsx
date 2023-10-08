import React from "react";
import { useLocation } from "react-router-dom";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import { loadFull } from "tsparticles";

import About from "./components/About/About";
import Blogs from "./components/Blogs/Blogs";
import Books from "./components/book/Books-cornner";
import Front from "./components/Front/Front";
import Work from "./components/Work/Work";
import Resume from "./components/resume/Resume";

import { AnimatePresence } from "framer-motion";

const particlesOptions = {
  particles: {
    number: {
      value: 104,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: "#ffffff",
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000",
      },
      polygon: {
        nb_sides: 5,
      },
      image: {
        src: "img/github.svg",
        width: 100,
        height: 100,
      },
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#42f55d",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 1,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "repulse",
      },
      onclick: {
        enable: true,
        mode: "push",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
};

const particlesInit = async (main) => {
  //console.log(main);
  await loadFull(main);
};

const particlesLoaded = (container) => {
  //console.log(container);
};

function AnimatePage() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.path}>
        <Route
          exact
          path="/"
          element={
            <Front
              particlesInit={particlesInit}
              particlesLoaded={particlesLoaded}
              particlesOptions={particlesOptions}
            />
          }
        />
        <Route
          exact
          path="/about"
          element={
            <About
              particlesInit={particlesInit}
              particlesLoaded={particlesLoaded}
              particlesOptions={particlesOptions}
            />
          }
        />

        <Route
          exact
          path="/books"
          element={
            <Books
              particlesInit={particlesInit}
              particlesLoaded={particlesLoaded}
              particlesOptions={particlesOptions}
            />
          }
        />

        <Route
          exact
          path="/work"
          element={
            <Work
              particlesInit={particlesInit}
              particlesLoaded={particlesLoaded}
              particlesOptions={particlesOptions}
            />
          }
        />

        <Route
          exact
          path="/blogs"
          element={
            <Blogs
              particlesInit={particlesInit}
              particlesLoaded={particlesLoaded}
              particlesOptions={particlesOptions}
            />
          }
        />

        <Route
          exact
          path="/resume"
          element={
            <Resume
              particlesInit={particlesInit}
              particlesLoaded={particlesLoaded}
              particlesOptions={particlesOptions}
            />
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatePage;
