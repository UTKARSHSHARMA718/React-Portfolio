import React, { useEffect } from "react";

import { booksApiKey, googleBooksApi } from "../../Constants/Const";
import { motion } from "framer-motion";
import "./bookinfo.css";

const BooksInfo = (props) => {
  // API for books
  async function booksFetch() {
    const books = await fetch(
      googleBooksApi +
        props.name +
        "&download=epub&key=" +
        booksApiKey +
        "&maxResults=1"
    );
    let res = await books.json();
    try {
      document.getElementById("thumbnail").src =
        res.items[0].volumeInfo.imageLinks.thumbnail;
      document.getElementById("book-title").innerHTML =
        res.items[0].volumeInfo.title;
      document.getElementById("authors").innerHTML =
        "-By " + res.items[0].volumeInfo.authors;
      document.getElementById("book-desc").innerHTML =
        res.items[0].volumeInfo.description;
      document.getElementById("categories").innerHTML =
        "category: " + res.items[0].volumeInfo.categories;
      document.getElementById("previewLink").href =
        res.items[0].volumeInfo.previewLink;
    } catch (error) {
      return "Unable to found the desired book.";
    }
  }

  const handleOnBack = () => {
    props.setLoadBookInfo(false);
  };

  useEffect(() => {
    booksFetch();
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
    >
      <div className="completeInside">
        <div className="info">
          <div className="frame">
            <img src="" alt="Book image" id="thumbnail" />
          </div>
          <h1 id="book-title" style={{ color: "greenyellow" }}></h1>
          <h3 id="authors" style={{ color: "gold" }}></h3>
          <p id="book-desc" style={{ color: "white" }}></p>

          <div id="CPB">
            <h3 id="categories" style={{ color: "white" }}></h3>
            <a
              id="previewLink"
              style={{ color: "gold" }}
              href=""
              target="_blank"
            >
              See Preview
            </a>
            <a id="buyLinka" href={props.buylink} target="_blank">
              Buy
            </a>
          </div>
        </div>

        <button className="BackButton" onClick={handleOnBack}>
          BACK
        </button>
      </div>
    </motion.div>
  );
};

export default BooksInfo;
