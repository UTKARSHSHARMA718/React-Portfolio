import React, { useEffect, useState } from "react";

import Particles from "react-tsparticles";
import { HASHNODE_API } from "../Constants/Const";
import { motion } from "framer-motion";
import "./Blogs.css";
import BlogCard from "../BlogCard/BlogCard";
import CustomLoader from "../../CustomLoader/CustomLoader";

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

  // const fetchPosts = async () => {
  //   const response = await fetch(HASHNODE_API, {
  //     method: "POST",
  //     headers: {
  //       "Content-type": "application/json",
  //     },
  //     body: JSON.stringify({ query: HASHNODE_POST_QUERY, variables: {} }),
  //   });
  //   const ApiResponse = await response.json();
  //   setState({ posts: await ApiResponse.data.user.publication.posts });

  //   this.setState({
  //     data: await ApiResponse.data.user.publication.posts,
  //   });
  // };

  const fetchData = async () => {
    setIsLoading(true);
    setError("");
    try {
      const res = await fetch(HASHNODE_API, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ query:HASHNODE_POST_QUERY }),
      });
      const data = await res.json();  
      setData(data?.data?.user?.publication?.posts);
      setIsLoading(false);
    } catch (err) {
      setError(error);
      setIsLoading(false);
      console.log(error);
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
      {!!error && !isLoading && <h3>{error}</h3>}
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
