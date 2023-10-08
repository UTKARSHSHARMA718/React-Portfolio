import React from "react";

import "./BlogCardStyles.css";

const WORDS_TO_CHARACTER = 135;

const BlogCard = ({ post }) => {
  const { slug, title, brief, coverImage } = post;
  return (
    <a href={`https://supercomputing.hashnode.dev/${slug}`}>
      <div className="card" id="cardSize" style={{ backgroundColor: "black" }}>
        <div id="imgCard"></div>
        <img src={coverImage} className="card-img-top" id="images" alt="..." />
        <div className="card-body">
          <h5 className="card-title" id="title">
            {title}
          </h5>
          <p className="card-text" id="desc" style={{ color: "white" }}>
            {brief?.slice(0, WORDS_TO_CHARACTER)}...
          </p>
        </div>
      </div>
    </a>
  );
};

export default BlogCard;
