import React from "react";

class SearchBar extends React.Component {
  // onChange -- User changes text in an input
  // onClick -- User clicks on something
  // onSubmit -- User submits a form

  // Controlled = stored on state property inside of components
  // Uncontrolled = stored inside of DOM

  // this is a reference to the class

  state = { term: "" };

  onFormSubmit = (event) => {
    event.preventDefault(); // prevent submission to sever after each onChange Event

    // props.onSubmit is a pass down from parent to child, and will invoke onSubmit when onFormSubmit is invoked
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term} // re-evaluated on each render caused by changing the state (term)
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
