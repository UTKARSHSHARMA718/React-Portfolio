import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GTIHUB_PROFILE_URL, HASHNODE_PROFILE_URL, INSTAGRAM_PROFILE_URL, LINKEDIN_PROFILE_URL, TWITTER_PROFILE_URL } from "../../Constants/Const";
import {
  faGithub,
  faTwitter,
  faInstagram,
  faLinkedin,
  faHashnode,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer id="footer">
        <h6>Made with ❤️ by Utkarsh Sharma</h6>
        <div class="socials">
          <a href={GTIHUB_PROFILE_URL}>
            <FontAwesomeIcon className="socials" icon={faGithub} />
          </a>
          <a href={TWITTER_PROFILE_URL}>
            <FontAwesomeIcon className="socials" icon={faTwitter} />
          </a>
          <a href={LINKEDIN_PROFILE_URL}>
            <FontAwesomeIcon className="socials" icon={faLinkedin} />
          </a>
          <a href={HASHNODE_PROFILE_URL}>
            <FontAwesomeIcon className="socials" icon={faHashnode} />
          </a>
          <a href={INSTAGRAM_PROFILE_URL}>
            <FontAwesomeIcon className="socials" icon={faInstagram} />
          </a>
          <a href="#">
            <FontAwesomeIcon className="socials" icon={faYoutube} />
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
