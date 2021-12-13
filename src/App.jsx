import "./App.css";
import React, { Component } from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import SearchBar from "./components/Searchbar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Button from "./components/Button/Button";
class App extends Component {
  state = {
    images: [],
    searchBy: "",
    page: 1,
    isLoaded: false,
  };

  fetchImages = (searchQuery, page) => {
    fetch(
      `https://pixabay.com/api/?&q=${searchQuery}&page=${page}&key=15898685-89bff7612e9c08763771f3be3&image_type=photo&orientation=horizontal&per_page=12`
    )
      .then((d) => d.json())
      .then((data) => {
        this.state.page === 1
          ? this.setState({
              images: data.hits,
              page: page + 1,
              isLoaded: true,
            })
          : this.setState({
              images: [...this.state.images, ...data.hits],
              page: page + 1,
              isLoaded: true,
            });
      });
  };

  handleChange = (e) => {
    this.setState({ page: 1 });
    const value = e.target.value;
    this.setState({ searchBy: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.fetchImages(this.state.searchBy, this.state.page);
  };

  loadMore = (e) => {
    e.preventDefault();
    console.log(this.state.page);
    this.fetchImages(this.state.searchBy, this.state.page);
  };

  componentDidMount() {
    this.fetchImages(this.state.searchBy, this.state.page);
  }

  render() {
    const { isLoaded } = this.state;
    if (!isLoaded) {
      return (
        <div>
          <SearchBar
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
          />
          <Loader type="TailSpin" color="#00BFFF" height={80} width={80} />
        </div>
      );
    } else {
      return (
        <div>
          <SearchBar
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
          />
          <ImageGallery images={this.state.images} />
          <Button loadMore={this.loadMore} />
        </div>
      );
    }
  }
}

export default App;
