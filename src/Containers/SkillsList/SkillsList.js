import React from "react";

import styles from "./SkillsList.module.css";

const SkillsList = ({
  data = [],
  heading,
  isRequiredTwoColumn,
  data2 = [],
}) => {

  return (
    <div>
      <h3 className={styles.heading}>{heading}</h3>
      <div className={styles.skills}>
        <div className={styles.PS}>
          <ul>
            {data?.map((skill) => {
              return <li key={skill}>{skill}</li>
            })}
          </ul>
        </div>
        {!!isRequiredTwoColumn && (
          <div className={styles.PS}>
            <ul>
              {data2?.map((skill) => {
                return <li key={skill}>{skill}</li>
              })}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default SkillsList;
