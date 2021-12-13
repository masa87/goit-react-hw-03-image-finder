import React from "react";
import styles from "./Button.module.css";

const Button = ({ loadMore }) => {
  return (
    <button onClick={loadMore} className={styles.Button}>
      {" "}
      Load more
    </button>
  );
};

export default Button;
