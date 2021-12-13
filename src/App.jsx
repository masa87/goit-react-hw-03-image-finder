import "./App.css";
import React, { Component } from "react";
import SearchBar from "./components/Searchbar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Button from "./components/Button/Button";
// import fetchImages from "./api/api.js";
// import api from "./api/api";

class App extends Component {
  state = {
    images: [],
    searchBy: "",
  };

  fetchImages = (searchQuery) => {
    fetch(
      `https://pixabay.com/api/?&q=${searchQuery}&page=1&key=15898685-89bff7612e9c08763771f3be3&image_type=photo&orientation=horizontal&per_page=12`
    )
      .then((d) => d.json())
      .then((data) => this.setState({ images: data.hits }));
  };

  handleChange = (e) => {
    const value = e.target.value;
    this.setState({ searchBy: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.fetchImages(this.state.searchBy);
  };

  async componentDidMount() {
    this.fetchImages(this.state.searchBy);
  }

  render() {
    return (
      <div>
        <SearchBar
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
        <ImageGallery images={this.state.images} />
        <Button />
      </div>
    );
  }
}

export default App;
