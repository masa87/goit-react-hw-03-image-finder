import React from "react";
import styles from "./SearchBar.module.css";

const SearchBar = ({ handleChange, handleSubmit }) => {
  return (
    <header className={styles.Searchbar}>
      <form onSubmit={handleSubmit} className={styles.SearchForm}>
        <button type="submit" className={styles.SearchFormButton}>
          {/* <svg class="formIcon">
            <use xlink:href="./symbol-defs.svg#icon-search" />
          </svg> */}
          <span className={styles.SearchFormButtonLabel}>Search</span>
        </button>

        <input
          className={styles.SearchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={handleChange}
        />
      </form>
    </header>
  );
};

export default SearchBar;
