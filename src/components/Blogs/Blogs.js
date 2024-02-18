import React, { useEffect, useState } from "react";

import Particles from "react-tsparticles";
import { GENERAL_ERROR_TEXT, HASHNODE_API } from "../../Constants/Const";
import { motion } from "framer-motion";
import "./Blogs.css";
import BlogCard from "../BlogCard/BlogCard";
import CustomLoader from "../CustomLoader/CustomLoader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

const HASHNODE_POST_QUERY = `
    {
      user(username: "Utkarsh-sharma") {
        publication {
          posts{
            slug
            title
            brief
            coverImage
            _id
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
        body: JSON.stringify({ query: HASHNODE_POST_QUERY }),
      });
      const data = await res.json();
      setIsLoading(false);
      if (data?.data?.user?.publication?.posts) {
        setData(data?.data?.user?.publication?.posts);
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
      className="blogsDialog"
    >
      {!isLoading && !!data?.length && !error && (
        <>
          <h1 className="heading">My Blogs</h1>
          <div id="blogss">
            {data?.map((post) => (
              <BlogCard {...{ post }} key={post?._id} />
            ))}
          </div>
        </>
      )}
      {isLoading && !error && <CustomLoader />}
      {!!error && !isLoading && <ErrorMessage 
      heading={"error ocuured"}
      description={"Not able to fetch data"}
      
      />}
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
