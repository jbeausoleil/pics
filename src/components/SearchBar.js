import React from "react";

class SearchBar extends React.Component {
  // onChange -- User changes text in an input
  // onClick -- User clicks on something
  // onSubmit -- User submits a form

  // onInputChange = (event) => {
  //   console.log(event);
  // };

  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input type="text" onChange={(e) => console.log(e.target.value)} />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;