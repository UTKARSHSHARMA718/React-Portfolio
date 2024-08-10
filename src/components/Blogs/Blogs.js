import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { TbWriting } from "react-icons/tb";

import BlogCard from "../BlogCard/BlogCard";
import CustomLoader from "../CustomLoader/CustomLoader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import HeadingWithIcon from "../HeadingWithIcon/HeadingWithIcon";
import TiltEffectContainer from "../TiltEffectContainer/TiltEffectContainer";
import withParticals from "../../HOC/withParticals/withParticals";
import {
  ERROR_OCCURED,
  GENERAL_ERROR_TEXT,
} from "../../Constants/Const";
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
  const { t } = useTranslation();

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  // TODO: use useFetch hook here
  console.log({hh: process.env.REACT_APP_HASHNODE_END_POINT})
  const fetchData = async () => {
    setIsLoading(true);
    setError("");
    try {
      const res = await fetch(process.env.REACT_APP_HASHNODE_END_POINT, {
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
      if (data?.data?.user?.posts?.edges) {
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
    <>
      {!isLoading && !error && (
        <>
          <HeadingWithIcon heading={`${t("my")} ${t("blogs")}`} icon={TbWriting}/>
          <div className={styles["blogs-container"]}>
            {data?.map((post, index) => (
              <TiltEffectContainer
                key={index}
                href={`${process.env.REACT_APP_BLOGS_END_POINT}${post?.node?.slug}`}
                isLink
              >
                <BlogCard post={post?.node} />
              </TiltEffectContainer>
            ))}
          </div>
        </>
      )}
      {isLoading && !error && <CustomLoader />}
      {!!error && !isLoading && (
        <ErrorMessage
          heading={ERROR_OCCURED}
          description={error}
          onBtnClick={fetchData}
        />
      )}
    </>
  );
};

export default withParticals(Blogs);
