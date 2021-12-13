import React, { Component } from "react";
import styles from "./Modal.module.css";

class Modal extends Component {
  render() {
    const { largeImg, closeModal } = this.props;

    return (
      <div className={styles.Overlay} onClick={closeModal}>
        <div className={styles.Modal}>
          <img src={largeImg} alt="" />
        </div>
      </div>
    );
  }
}

export default Modal;
