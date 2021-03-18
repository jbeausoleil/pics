import React from "react";
import SearchBar from "./SearchBar";

class App extends React.Component {
  onSearchSubmit = (term) => { // Controls what is to be submitted from text in SearchBar.js
    console.log(term);
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        {/*Can be any name for properties or cb when passing parent to child*/}
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
