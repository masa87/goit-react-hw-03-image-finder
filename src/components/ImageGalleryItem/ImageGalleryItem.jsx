import React, { Component } from "react";
import styles from "./ImageGalleryItem.module.css";

const ImageGalleryItem = ({ images }) => {
  return (
    <>
      {images.map(({ id, webformatURL, largeImageURL }) => (
        <li key={id} className={styles.ImageGaleryItem}>
          <img
            className={styles.ImageGalleryItemImage}
            src={webformatURL}
            alt="opis obrazka"
          />
        </li>
      ))}
    </>
  );
};

export default ImageGalleryItem;
