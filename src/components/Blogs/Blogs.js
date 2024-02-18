import React, { useEffect, useState } from "react";

import Particles from "react-tsparticles";
import { GENERAL_ERROR_TEXT, HASHNODE_API } from "../../Constants/Const";
import { motion } from "framer-motion";
import BlogCard from "../BlogCard/BlogCard";
import CustomLoader from "../CustomLoader/CustomLoader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import styles from "./Blogs.module.css";

const HASHNODE_POST_QUERY = `
query User($username: String!, $page: Int!, $pageSize: Int!) {
  user(username: $username) {
    id
    username
    name
    posts(page: $page, pageSize: $pageSize) {
      edges {
        node {
          id
          slug
          title
          brief
          coverImage {
            url
          }
        }
      }
    }
  }
}
`;

const Blogs = ({ particlesOptions, particlesLoaded, particlesInit }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchData = async () => {
    setIsLoading(true);
    setError("");
    try {
      const res = await fetch(HASHNODE_API, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          query: HASHNODE_POST_QUERY,
          variables: { page: 1, pageSize: 3, username: "Utkarsh-sharma" },
        }),
      });
      const data = await res.json();
      setIsLoading(false);
      if (data?.data) {
        setData(data?.data?.user?.posts?.edges);
        return;
      }
      setError(GENERAL_ERROR_TEXT);
    } catch (err) {
      setIsLoading(false);
      if (err?.message) {
        setError(err?.message);
        return;
      }
      setError(GENERAL_ERROR_TEXT);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
      className={styles["blogsDialog"]}
    >
      {!isLoading && !error && (
        <>
          <h1 className={styles["heading"]}>My Blogs</h1>
          <div className={styles["blogs-container"]}>
            {data?.map((post) => (
              <BlogCard post={post?.node} key={post?._id} />
            ))}
          </div>
        </>
      )}
      {isLoading && !error && <CustomLoader />}
      {!!error && !isLoading && (
        <ErrorMessage
          heading={"Error Occured"}
          description={error}
          onBtnClick={fetchData}
        />
      )}
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={particlesOptions}
      />
    </motion.div>
  );
};

export default Blogs;
