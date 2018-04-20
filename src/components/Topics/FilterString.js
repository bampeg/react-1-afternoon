import React, { Component } from 'react';

export default class FilterString extends Component {
  constructor() {
    super()
    this.state = {

    }
  }

  render() {
    return (
      <div className="puzzleBox filterStringPB">
        <h4>Filter String</h4>
        <span className="puzzleText"></span>
        <input
          className="inputLine" />
        <button></button>
        <span></span>
      </div>
    );
  }
}