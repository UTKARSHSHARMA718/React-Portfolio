import React from "react";

import infinitySpinner from "../../Assets/Images/Infinity-1s-200px.gif";
import './CustomLoaderStyles.css'

const CustomLoader = () => {
  return (
    <>
    <div id="loaderContainer">
      <img src={infinitySpinner} alt="loading spinner" id="loader-spinner" />
    </div>
    </>
  );
};

export default CustomLoader;
