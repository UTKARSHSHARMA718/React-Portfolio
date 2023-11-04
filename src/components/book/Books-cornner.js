import React, { useState, useEffect } from "react";

import BooksInfo from "./BooksInfo";
import Particles from "react-tsparticles";
import { apiKey, googleBooksApi } from "../../Constants/Const";
import { booksData } from "../../Constants/BooksData";
import { motion } from "framer-motion";
import "./Books.css";
// import AnimatePage from "../../AnimatePage";

const Books = (props) => {
  const [loadBookInfo, setLoadBookInfo] = useState(false);
  const [LoadImage, setLoadImage] = useState(false);
  const [bookName, setBookName] = useState("");
  const [buy, setBuy] = useState("");

  const handleOnBookInfo = (name, buyLink) => {
    setBookName(name);
    setBuy(buyLink);
    setLoadBookInfo(true);
  };

  //! unable to load images
  let res;
  // API for books
  async function booksFetch() {
    booksData.map(async (o) => {
      const books = await fetch(
        googleBooksApi +
          o.name +
          "&download=epub&key=" +
          apiKey +
          "&maxResults=33"
      );
      res = await books.json();
      o.imageUrl = res.items[0].volumeInfo.imageLinks.thumbnail;
    });
    setLoadImage(true);
  }

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
      <h1>Books Corner</h1>
      <p id="para"></p>

      {LoadImage &&
        !loadBookInfo &&
        booksData.map((o) => {
          return (
            <div
              className="card bookscard"
              onClick={() => handleOnBookInfo(o.name, o.buyLink)}
            >
              <img class="cardIMG" src={o.imageUrl} alt="image" />
              <div
                className="card-body books-card"
                style={{ backgroundColor: "greenyellow" }}
              >
                <p
                  className="book-name"
                >
                  {o.name}
                </p>
              </div>
            </div>
          );
        })}

      {loadBookInfo && (
        <BooksInfo
          name={bookName}
          buylink={buy}
          setLoadBookInfo={setLoadBookInfo}
        />
      )}
      <Particles
        id="tsparticles"
        init={props.particlesInit}
        loaded={props.particlesLoaded}
        options={props.particlesOptions}
      />
    </motion.div>
  );
};

export default Books;
