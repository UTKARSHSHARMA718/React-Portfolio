import React from "react";
import { useLocation } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { loadFull } from "tsparticles";

import About from "../About/About";
import Blogs from "../Blogs/Blogs";
import Books from "../book/BooksCorner";
import Front from "../Front/Front";
import Work from "../Work/Work";
import Resume from "../resume/Resume";
import { AnimatePresence } from "framer-motion";
import BooksInfo from "../book/BooksInfo";
import { particlesOptions } from "../../Constants/Const";
import {
  ABOUT,
  BLOGS,
  BOOKS,
  DETAILS,
  HOME,
  RESUME,
  WORK,
} from "../../Constants/routeNames";

const particlesInit = async (main) => {
  await loadFull(main);
};

const particlesLoaded = (container) => {};

function AnimatePage() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.path}>
        <Route
          exact
          path={HOME}
          element={
            <Front {...{ particlesInit, particlesLoaded, particlesOptions }} />
          }
        />
        <Route
          exact
          path={ABOUT}
          element={
            <About {...{ particlesInit, particlesLoaded, particlesOptions }} />
          }
        />
        <Route
          exact
          path={BOOKS}
          element={
            <Books {...{ particlesInit, particlesLoaded, particlesOptions }} />
          }
        />
        <Route
          exact
          path={`${BOOKS}/:name${DETAILS}`}
          element={
            <BooksInfo
              {...{ particlesInit, particlesLoaded, particlesOptions }}
            />
          }
        />
        <Route
          exact
          path={WORK}
          element={
            <Work {...{ particlesInit, particlesLoaded, particlesOptions }} />
          }
        />
        <Route
          exact
          path={BLOGS}
          element={
            <Blogs {...{ particlesInit, particlesLoaded, particlesOptions }} />
          }
        />
        <Route
          exact
          path={RESUME}
          element={
            <Resume {...{ particlesInit, particlesLoaded, particlesOptions }} />
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatePage;
