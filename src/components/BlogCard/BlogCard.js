import React from "react";

import styles from "./BlogCardStyles.module.css";

const WORDS_TO_CHARACTER = 120;

const BlogCard = ({ post }) => {
  const { slug, title, brief, coverImage } = post;
  const url = coverImage?.url || "";
  return (
    <a href={`https://supercomputing.hashnode.dev/${slug}`}>
      <div className={styles["card"]}>
        <div className={styles["imgCard"]}>
          <img src={url} className={styles["images"]} alt="..." />
        </div>
        <div className={styles["card-body"]}>
          <h5 className={styles["card-title"]} id="title">
            {title}
          </h5>
          <p className={styles["card-text"]} style={{ color: "white" }}>
            {brief?.slice(0, WORDS_TO_CHARACTER)}...
          </p>
        </div>
      </div>
    </a>
  );
};

export default BlogCard;
