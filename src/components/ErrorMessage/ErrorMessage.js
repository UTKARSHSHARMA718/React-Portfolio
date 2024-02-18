import React from "react";
import PropTypes from "prop-types";
import styles from "./ErrorMessage.module.css";

const ErrorMessage = ({ btnText, description, heading, image, onBtnClick }) => {
  return (
    <div className={styles.container}>
      {!!image && (
        <div>
          <image src={image} alt={"error-image"} />
        </div>
      )}
      {!!heading && (
        <div>
          <h2>{heading}</h2>
        </div>
      )}
      {!!description && (
        <div>
          <h3>{description}</h3>
        </div>
      )}
      {!!btnText && (
        <div>
          <button
            onClick={(event) => {
              onBtnClick && onBtnClick(event);
            }}
          >
            {btnText}
          </button>
        </div>
      )}
    </div>
  );
};

ErrorMessage.defaultProps = {
  btnText: "Retry",
  description: "",
  heading: "Error Occured",
  image: "",
  onBtnClick: () => {},
};

ErrorMessage.propTypes = {
  btnText: PropTypes.string,
  description: PropTypes.string,
  heading: PropTypes.string,
  image: PropTypes.string,
  onBtnClick: PropTypes.func,
};

export default ErrorMessage;

/*
Create a common error component.
Fix hashnode api response issue.
Integrate proptype in entire project.
Replace .css file to .module.css file extension.
Change front-page text.
Check responsiveness of the website.
Pushed changes to the productions.

*/
