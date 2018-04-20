import React, { Component } from 'react';

export default class FilterObject extends Component {
  constructor() {
    super()
    this.state = {
      unfilteredArray: [
        { name: 'Greg', color: 'blue', age: 27, gender: 'male' },
        { color: 'red', hobby: 'playing with legos', gender: 'male' },
        { name: 'Amanda', color: 'mint', hobby: 'piano', age: 27 },
        { name: 'Julie', color: 'yellow', hobby: 'paper crafting', gender: 'female' }
      ],
      userInput: '',
      filteredArray: []
    }
  }

  handleUserInput(value) {
    this.setState({
      userInput: value
    });
  }

  handleFilter() {
    let input = this.state.userInput,
      unfiltered = this.state.unfilteredArray,
      filtered = unfiltered.map(person => {
        if (person.hasOwnProperty(input)) {
          return person
        }
      });
    this.setState({
      filteredArray: filtered,
      userInput: ''
    });
  }

  render() {
    return (
      <div className="puzzleBox filterObjectPB">
        <h4>Filter Object</h4>
        <span className="puzzleText">Original: {JSON.stringify(this.state.unfilteredArray)}</span>
        <input
          className="inputLine"
          value={this.state.userInput}
          onChange={e => this.handleUserInput(e.target.value)} />
        <button
          className="confirmationButton"
          onClick={() => this.handleFilter()}
        >Filter</button>
        <span className="resultsBox filterObjectRB">Filtered: {JSON.stringify(this.state.filteredArray)}</span>
      </div>
    );
  }
}