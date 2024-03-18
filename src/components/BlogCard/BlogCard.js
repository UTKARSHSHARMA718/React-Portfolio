import React from "react";

import ToolTip from "../ToolTip/ToolTip";
import { BLOGS_END_POINT } from "../../Constants/Const";
import { getTrimmedText } from "../../utils/util";
import styles from "./BlogCardStyles.module.css";

const BlogCard = ({ post }) => {
  const { slug, title, brief, coverImage } = post;
  const url = coverImage?.url || "";

  return (
    <a href={`${BLOGS_END_POINT}${slug}`} className={styles.parentContainer}>
      <div className={styles["card"]}>
        <div className={styles["imgCard"]}>
          <img src={url} className={styles["images"]} alt="blogs-image" />
        </div>
        <div className={styles["card-body"]}>
          <div className={styles.headingContainer}>
            <ToolTip data={title}>
              <h5 className={styles["card-title"]} id="title">
                {getTrimmedText({ text: title, limit: 21 })}
              </h5>
            </ToolTip>
          </div>
          <div className={styles["descriptionContainer"]}>
            <p className={styles["card-text"]} style={{ color: "white" }}>
              {getTrimmedText({ text: brief, limit: 70 })}...
            </p>
          </div>
        </div>
      </div>
    </a>
  );
};

export default BlogCard;
