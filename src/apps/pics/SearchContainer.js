import React from 'react';
import unsplash from './api/unsplash';
import SearchBar from './components/SearchBar';
import ImageList from "./components/ImageList";

class SearchContainer extends React.Component {
  state = { images: [], errMessage: "" };

  onSearchSubmit = async (term) => {

    //https://unsplash.com/documentation#update-a-photo
    const response = await unsplash.get("/search/photos", {
        params: { query: term, per_page: 30, page: 1}
    });

    if (response.data.total === 0) {
      this.setState({ images: [], errMessage: "No data found." });
    } else {
        this.setState({ images: response.data.results, errMessage: "" });
    }
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} state={this.state} />
      </div>
    );
  }
}

export default SearchContainer;
