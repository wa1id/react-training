import React, { Component } from "react";

class MoviesDetail extends Component {
  handleSave = () => {
    this.props.history.replace("/movies");
  };

  render() {
    return (
      <React.Fragment>
        <h1>Movie Form {this.props.match.params.id}</h1>
        <button onClick={this.handleSave} className="btn btn-primary">
          Save
        </button>
      </React.Fragment>
    );
  }
}

export default MoviesDetail;
