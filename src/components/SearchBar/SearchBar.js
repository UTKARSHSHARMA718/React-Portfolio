import React from "react";

import styles from "./SearchBar.module.css";

const SearchBar = ({
  value,
  placeholder,
  type,
  isShowBtn,
  customStyles,
  onChange,
}) => {
  return (
    <div>
      <input
        className={[styles.input, customStyles].join(" ")}
        type={type || "text"}
        {...{ value, placeholder, onChange }}
      />
      {isShowBtn && <button>Search</button>}
    </div>
  );
};

export default SearchBar;
