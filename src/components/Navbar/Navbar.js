import { React, useEffect, useRef, useState } from "react";

import useScrollDirection from "../../customHooks/useScrollDirection";
import imgUrl from "../../Assets/Images/1.png";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [mobile, setMobile] = useState(false);
  const [canCanChangeBGColor, setCanChangeBGColor] = useState(false);
  const path = useLocation();
  const scrollWatcherRef = useRef();
  const currentPage = path?.pathname?.slice(1);
  const { scrollingDirection } = useScrollDirection();

  const handleClickMobile = () => {
    setMobile(!mobile);
  };
  const handleClickMobileClose = () => {
    setMobile(false);
  };

  const navObserver = new IntersectionObserver((enteries) => {
    const isInterSecting = !enteries[0].isIntersecting;
    console.log({ isInterSecting });
    setCanChangeBGColor(isInterSecting);
  });

  useEffect(() => {
    navObserver?.observe(scrollWatcherRef?.current);
  }, []);

  return (
    <>
      <div data-scroll-watcher ref={scrollWatcherRef}></div>
      <div
        className={`containerNav ${
          scrollingDirection === -1 ? "stick-to-top" : ""
        }`}
      >
        <div
          className={
            mobile
              ? "navbar-mobile"
              : `navbar ${canCanChangeBGColor ? "on-navbar-sticking" : ""}`
          }
        >
          <div className="jungle">
            <img id="logo" src={imgUrl} alt="logo" />
            <input type="checkbox" id="click" />
            <label
              htmlFor="click"
              className="barsIcon"
              onClick={handleClickMobile}
            >
              <i class="fas fa-bars"></i>
            </label>
          </div>
          <ul className="navLink-list">
            <Link
              className={`navLinks ${currentPage === "" ? "whiteColor" : ""}`}
              to="/"
              onClick={handleClickMobileClose}
            >
              Home
            </Link>
            <Link
              className={`navLinks ${
                currentPage === "blogs" ? "whiteColor" : ""
              }`}
              to="/blogs"
              onClick={handleClickMobileClose}
            >
              Blogs
            </Link>
            <Link
              className={`navLinks ${
                currentPage === "books" ? "whiteColor" : ""
              }`}
              to="/books"
              onClick={handleClickMobileClose}
            >
              Books Corner
            </Link>
            <Link
              className={`navLinks ${
                currentPage === "work" ? "whiteColor" : ""
              }`}
              to="/work"
              onClick={handleClickMobileClose}
            >
              Projects
            </Link>
            <Link
              className={`navLinks ${
                currentPage === "resume" ? "whiteColor" : ""
              }`}
              to="/resume"
              onClick={handleClickMobileClose}
            >
              Resume
            </Link>
            <Link
              className={`navLinks ${
                currentPage === "about" ? "whiteColor" : ""
              }`}
              to="/about"
              onClick={handleClickMobileClose}
            >
              About
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
