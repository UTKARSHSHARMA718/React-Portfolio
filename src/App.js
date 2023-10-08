import React from "react";
import "./App.css";
import "./index.css";
import {
  BrowserRouter as Router,
} from "react-router-dom";

import { loadFull } from "tsparticles";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

import AnimatePage from "./AnimatePage";

// // lazy loading
// const LazyAbout =React.lazy(()=>import("./components/About/About"))
// const LazyBlogs =React.lazy(()=>import("./components/Blogs/Blogs"))
// const LazyBooks =React.lazy(()=>import("./components/book/Books-cornner"))
// const LazyFront =React.lazy(()=>import("./components/Front"))
// const LazyWork =React.lazy(()=>import("./components/Work/Work"))

// const LazyResume =React.lazy(()=>import("./components/resume/Resume"))

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

function App() {
  
  return (
    <>
      <Router>
        <Navbar />
        <AnimatePage />
        <Footer />
      </Router>
    </>
  );
}

export default App;
