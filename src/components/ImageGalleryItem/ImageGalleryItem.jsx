import React, { Component } from "react";
import styles from "./ImageGalleryItem.module.css";

class ImageGalleryItem extends Component {
  render() {
    const { id, webformatURL, largeImageURL } = this.props;
    return (
      <li id={id} className={styles.ImageGaleryItem}>
        <img
          className={styles.ImageGalleryItemImage}
          src={webformatURL}
          alt="opis obrazka"
          data-img={largeImageURL}
        />
      </li>
    );
  }
}

export default ImageGalleryItem;
