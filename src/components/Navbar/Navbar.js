import { React, useState } from "react";
import imgUrl from "../../Assets/Images/1.png";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [mobile, setMobile] = useState(false);

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
            <Link className="navLinks" to="/" onClick={handleClickMobileClose}>
              Home
            </Link>
            <Link
              className="navLinks"
              to="/blogs"
              onClick={handleClickMobileClose}
            >
              Blogs
            </Link>
            <Link
              className="navLinks"
              to="/books"
              onClick={handleClickMobileClose}
            >
              Books Corner
            </Link>
            <Link
              className="navLinks"
              to="/work"
              onClick={handleClickMobileClose}
            >
              Projects
            </Link>
            <Link
              className="navLinks"
              to="/resume"
              onClick={handleClickMobileClose}
            >
              Resume
            </Link>
            <Link
              className="navLinks"
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
