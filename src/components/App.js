import React from "react";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList"
import unsplash from "../api/unsplash"

class App extends React.Component {
  state = {
    images: [],
  };

  onSearchSubmit = async (term) => {
    // Controls what is to be submitted from text in SearchBar.js
    const response = await unsplash.get("/search/photos", {
      params: {
        query: term,
      },
    });
    this.setState({
      images: response.data.results,
    });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        {/*Can be any name for properties or cb when passing parent to child*/}
        <SearchBar onSubmit={this.onSearchSubmit} />
        {/* Required for passing from parent to child */}
        {/*Found: {this.state.images.length}*/}
        <ImageList images={this.state.images}/>
      </div>
    );
  }
}

export default App;
