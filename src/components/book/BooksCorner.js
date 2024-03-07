import React, { useState } from "react";

import BooksCard from "../BooksCard/BooksCard";
import SearchBar from "../SearchBar/SearchBar";
import Particles from "react-tsparticles";
import { booksData } from "../../Constants/BooksData";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { BOOKS, DETAILS } from "../../Constants/routeNames";
import "./Books.css";

const Books = (props) => {
  const [searchValue, setSearchValue] = useState();
  const [allBooks, setAllBooks] = useState(booksData);
  const navigate = useNavigate();

  const handleOnBookInfo = (name) => {
    navigate(`${BOOKS}/${name}${DETAILS}`);
  };

  const handleOnUserSearch = (event) => {
    const searchedText = event?.target?.value;
    setSearchValue(searchedText);
    const filtereBooks = booksData?.filter((book) =>
      book?.name?.toLowerCase().includes(searchedText?.toLowerCase())
    );
    setAllBooks(filtereBooks);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
    >
      <div className="container">
        <h1>Books Corner</h1>
        <div className="searchAndBooksContainer">
          <div className="searchContainer">
            <SearchBar
              value={searchValue}
              placeholder="Search book name"
              onChange={handleOnUserSearch}
            />
          </div>
          <div className="booksContainer">
            {allBooks.map((o) => {
              return (
                <BooksCard
                  name={o?.text}
                  imageUrl={o?.imageUrl}
                  onClick={() => handleOnBookInfo(o.name)}
                />
              );
            })}
          </div>
        </div>
      </div>
      <Particles
        id="tsparticles"
        init={props?.particlesInit}
        loaded={props?.particlesLoaded}
        options={props?.particlesOptions}
      />
    </motion.div>
  );
};

export default Books;
