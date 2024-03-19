import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { filterData } from "../../utils/util";
import { LANGUAGE, LANGUAGES } from "../../Constants/Const";
import styles from "./ChangeLanguage.module.css";

const ChangeLanguage = () => {
  const { i18n } = useTranslation();
  const [selectedLang, setSelectedLang] = useState("en");

  const setLanguageValue = (strValue) => {
    i18n?.changeLanguage(strValue);
    setSelectedLang(strValue);
  };

  useEffect(() => {
    const value = localStorage?.getItem(LANGUAGE) || "en";
    if (
      value &&
      filterData({
        originalData: LANGUAGES,
        dataToFind: value,
        keyName: "value",
      })?.length
    ) {
      setLanguageValue(value);
      return;
    }

    setLanguageValue("en");
  }, []);

  return (
    <select
      onChange={(v) => setLanguageValue(v?.target?.value)}
      className={styles.container}
      value={selectedLang}
    >
      {LANGUAGES?.map((item) => {
        return (
          <option
            className={styles.option}
            value={item?.value}
            key={item?.label}
          >
            {item?.label}
          </option>
        );
      })}
    </select>
  );
};

export default ChangeLanguage;
