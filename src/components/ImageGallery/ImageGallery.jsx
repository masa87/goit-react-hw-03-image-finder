import React, { Component } from "react";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import style from "./ImageGallery.module.css";

class ImageGallery extends Component {
  render() {
    const { images } = this.props;
    return (
      <ul className={style.ImageGallery}>
        <ImageGalleryItem images={images} />
      </ul>
    );
  }
}

export default ImageGallery;
