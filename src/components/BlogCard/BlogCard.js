import React from "react";

import { BLOGS_END_POINT } from "../../Constants/Const";
import { getTrimmedText } from "../../utils/util";
import styles from "./BlogCardStyles.module.css";

const BlogCard = ({ post }) => {
  const { slug, title, brief, coverImage } = post;
  const url = coverImage?.url || "";

  return (
    <a href={`${BLOGS_END_POINT}${slug}`}>
      <div className={styles["card"]}>
        <div className={styles["imgCard"]}>
          <img src={url} className={styles["images"]} alt="blogs-image" />
        </div>
        <div className={styles["card-body"]}>
          <h5 className={styles["card-title"]} id="title">
            {getTrimmedText({ text: title, limit: 21 })}
          </h5>
          <div className={styles["descriptionContainer"]}>
            <p className={styles["card-text"]} style={{ color: "white" }}>
              {getTrimmedText({ text: brief, limit: 80 })}...
            </p>
          </div>
        </div>
      </div>
    </a>
  );
};

export default BlogCard;
