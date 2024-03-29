import { React, useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

import ChangeLanguage from "../ChangeLanguage/ChangeLanguage";
import useScrollDirection from "../../customHooks/useScrollDirection";
import useCustomNavigate from "../../customHooks/useCustomNavigate";
import imgUrl from "../../Assets/Images/1.png";
import { NAV_LINKS } from "../../Constants/Const";
import { HOME } from "../../Constants/routeNames";
import "./Navbar.css";

const Navbar = () => {
  const scrollWatcherRef = useRef();
  const path = useLocation();
  const { t } = useTranslation();

  const [mobile, setMobile] = useState(false);
  const [canCanChangeBGColor, setCanChangeBGColor] = useState(false);
  const currentPage = path?.pathname?.slice(1);

  const { scrollingDirection } = useScrollDirection();
  const { navigateTo } = useCustomNavigate();

  const handleClickMobile = () => {
    setMobile(!mobile);
  };
  const handleClickMobileClose = () => {
    setMobile(false);
  };

  const navObserver = new IntersectionObserver((enteries) => {
    const isInterSecting = !enteries[0].isIntersecting;
    setCanChangeBGColor(isInterSecting);
  });

  useEffect(() => {
    navObserver?.observe(scrollWatcherRef?.current);

    return () => {
      if (navObserver && scrollWatcherRef?.current) {
        navObserver?.unobserve(scrollWatcherRef?.current);
      }
    };
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
          className={[
            mobile
              ? "navbar-mobile"
              : `navbar ${canCanChangeBGColor ? "on-navbar-sticking" : ""}`,
            "transition",
          ].join(" ")}
        >
          <div className="jungle">
            <img
              id="logo"
              src={imgUrl}
              alt="logo"
              onClick={() => navigateTo(HOME)}
            />
            <input type="checkbox" id="click" className="responsive-input" />
            <label
              htmlFor="click"
              className="barsIcon"
              onClick={handleClickMobile}
            >
              {mobile ? (
                <i className="fas fa-solid fa-xmark"></i>
              ) : (
                <i className="fas fa-bars"></i>
              )}
            </label>
          </div>
          <ul className={`navLink-list ${!mobile ? "display-none" : ""}`}>
            {NAV_LINKS?.map((item) => {
              return (
                <Link
                  className={`navLinks ${
                    currentPage === item?.to?.slice(1) ? "whiteColor" : ""
                  }`}
                  to={item?.to}
                  key={item?.to}
                  onClick={handleClickMobileClose}
                >
                  {t(item?.text)}
                </Link>
              );
            })}
            <ChangeLanguage />
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
