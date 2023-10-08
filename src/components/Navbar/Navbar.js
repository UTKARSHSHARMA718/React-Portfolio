import { React, useState } from "react";
import imgUrl from "../../Assets/Images/1.png";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [mobile, setMobile] = useState(false);
  const path = useLocation();
  const currentPage = path?.pathname?.slice(1);

  const handleClickMobile = () => {
    setMobile(!mobile);
  };
  const handleClickMobileClose = () => {
    setMobile(false);
  };

  return (
    <>
      <div className="containerNav">
        <div className={mobile ? "navbar-mobile" : "navbar"}>
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
              className={`navLinks ${currentPage === "blogs" ? "whiteColor" : ""}`}
              to="/blogs"
              onClick={handleClickMobileClose}
            >
              Blogs
            </Link>
            <Link
              className={`navLinks ${currentPage === "books" ? "whiteColor" : ""}`}
              to="/books"
              onClick={handleClickMobileClose}
            >
              Books Corner
            </Link>
            <Link
              className={`navLinks ${currentPage === "work" ? "whiteColor" : ""}`}
              to="/work"
              onClick={handleClickMobileClose}
            >
              Projects
            </Link>
            <Link
              className={`navLinks ${currentPage === "resume" ? "whiteColor" : ""}`}
              to="/resume"
              onClick={handleClickMobileClose}
            >
              Resume
            </Link>
            <Link
              className={`navLinks ${currentPage === "about" ? "whiteColor" : ""}`}
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
