import React from "react";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = { spans: 0 };

    this.imageRef = React.createRef();
  }

  componentDidMount() {
    this.imageRef.current.addEventListener("load", this.setSpans);
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height / 10 + 1); // Add 1 to ensure the same spacing between each div
    this.setState({ spans });
  };

  render() {
    const { description, urls } = this.props.image;
    // gives you access sto a single DOM element
    // create refs in the constructor and assign them to instance variable then pass to JSX element as props
    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        {/* ref give information about the image DOM node */}
        <img
          ref={this.imageRef}
          alt={description}
          src={urls.regular}
        />
      </div>
    );
  }
}

export default ImageCard;
