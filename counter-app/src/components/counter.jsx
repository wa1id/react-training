import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
  };

  render() {
    return (
      <React.Fragment>
        <span className="badge badge-primary m-2">{this.formatCount()}</span>
        <button className="btn btn-secondary btn-sm">Button</button>
      </React.Fragment>
    );
  }

  formatCount() {
    const { count } = this.state; //dit is hetzelfde als "this.state.count". Zo is beter zodat we verder in de code gewoon "count" kunnen typen
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
