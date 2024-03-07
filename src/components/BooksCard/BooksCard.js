import React from "react";

import styles from "./BooksCard.module.css";

const BooksCard = ({ name, imageUrl, onClick }) => {

  return (
    <div
      className={[styles.card, styles.bookscard].join(" ")}
      onClick={onClick}
    >
      <img class={styles.cardIMG} src={imageUrl} alt="books-image" />
      <div className={[styles["card-body"], styles["books-card"]].join(" ")}>
        <p className={styles["book-name"]}>{name}</p>
      </div>
    </div>
  );
};

export default BooksCard;
