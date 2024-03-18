import React, { useEffect, useState } from "react";
import Particles from "react-tsparticles";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

import BooksCard from "../BooksCard/BooksCard";
import SearchBar from "../SearchBar/SearchBar";
import { filterData } from "../../utils/util";
import { booksData } from "../../Constants/BooksData";
import { BOOK_SEARCH_QUERY } from "../../Constants/Const";
import { BOOKS, DETAILS } from "../../Constants/routeNames";
import "./Books.css";

const Books = (props) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const [searchValue, setSearchValue] = useState();
  const [allBooks, setAllBooks] = useState(booksData);

  const handleOnBookInfo = (name) => {
    navigate(`${BOOKS}/${name}${DETAILS}`);
  };

  const handleOnUserSearch = (event) => {
    const searchedText = event?.target?.value;
    setSearchValue(searchedText);
    setSearchParams((prev) => {
      searchedText && prev.set(BOOK_SEARCH_QUERY, searchedText);
      !searchedText && prev?.delete(BOOK_SEARCH_QUERY);
      return prev;
    });
    const filteredBooks = filterData({
      originalData: booksData,
      dataToFind: searchedText,
      keyName: "name",
    });
    setAllBooks(filteredBooks);
  };

  useEffect(() => {
    const booksQuery = searchParams?.get(BOOK_SEARCH_QUERY);
    if (booksQuery) {
      setSearchValue(booksQuery);
      const data = filterData({
        originalData: booksData,
        dataToFind: booksQuery,
        keyName: "name",
      });
      setAllBooks(data);
    } else {
      searchParams?.delete(BOOK_SEARCH_QUERY);
    }
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
    >
      <div className="container">
        <h1>{t("books_corner")}</h1>
        <div className="searchAndBooksContainer">
          <div className="searchContainer">
            <SearchBar
              value={searchValue}
              placeholder={t("placeholder_books_search")}
              onChange={handleOnUserSearch}
            />
          </div>
          <div className="booksContainer">
            {allBooks.map((book) => {
              return (
                // TODO: below modal is not properly styles for image with text case
                <BooksCard
                  showOnHover={book?.name}
                  key={book?.imageUrl}
                  imageUrl={book?.imageUrl}
                  onClick={() => handleOnBookInfo(book.name)}
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
