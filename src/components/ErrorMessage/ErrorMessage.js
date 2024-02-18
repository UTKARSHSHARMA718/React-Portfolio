import React from "react";
import PropTypes from "prop-types";

import CustomButton from "../CustomButton/CustomButton"; 
import warningImage from "../../Assets/Images/warning-34621_1920.png";
import styles from "./ErrorMessage.module.css";

const ErrorMessage = ({ btnText, description, heading, image, onBtnClick }) => {
  return (
    <div className={styles.alignCenter}>
      <div className={styles.container}>
        {!!image && (
          <div>
            <img src={image} alt={"error-image"} className={styles.image} />
          </div>
        )}
        {!!heading && (
          <div>
            <p className={styles.heading}>{heading}</p>
          </div>
        )}
        {!!description && (
          <div>
            <p className={styles.subHeading}>{description}</p>
          </div>
        )}
        {!!btnText && (
          <div>
            <CustomButton text={btnText} onClick={onBtnClick} />
          </div>
        )}
      </div>
    </div>
  );
};

ErrorMessage.defaultProps = {
  btnText: "Retry",
  description: "",
  heading: "Error Occured",
  image: warningImage,
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
