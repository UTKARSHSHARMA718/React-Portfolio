import React from "react";

import ToolTip from "../ToolTip/ToolTip";
import styles from "./BooksCard.module.css";

const BooksCard = ({ name, imageUrl, onClick, showOnHover }) => {
  return (
    <ToolTip data={showOnHover}>
      <div
        className={[styles.card, styles.bookscard].join(" ")}
        onClick={onClick}
      >
        <img className={styles.cardIMG} src={imageUrl} alt="books-image" />
        <div className={[styles["card-body"], styles["books-card"]].join(" ")}>
          <p className={styles["book-name"]}>{name}</p>
        </div>
      </div>
    </ToolTip>
  );
};

export default BooksCard;
