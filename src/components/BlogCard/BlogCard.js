import React from "react";

import { BLOGS_END_POINT, CHARACTERS_TO_BE_SHOWN } from "../../Constants/Const";
import styles from "./BlogCardStyles.module.css";

const BlogCard = ({ post }) => {
  const { slug, title, brief, coverImage } = post;
  const url = coverImage?.url || "";

  return (
    <a href={`${BLOGS_END_POINT}${slug}`}>
      <div className={styles["card"]}>
        <div className={styles["imgCard"]}>
          <img src={url} className={styles["images"]} alt="..." />
        </div>
        <div className={styles["card-body"]}>
          <h5 className={styles["card-title"]} id="title">
            {title}
          </h5>
          <p className={styles["card-text"]} style={{ color: "white" }}>
            {brief?.slice(0, CHARACTERS_TO_BE_SHOWN)}...
          </p>
        </div>
      </div>
    </a>
  );
};

export default BlogCard;
