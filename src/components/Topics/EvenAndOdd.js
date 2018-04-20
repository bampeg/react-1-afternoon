import React, { Component } from 'react';

export default class EvenAndOdd extends Component {
  constructor() {
    super();
    this.state = {
      evenArray: [],
      oddArray: [],
      userInput: ''
    }
  }

  handleUserInput(input) {
    this.setState({
      userInput: input
    });
  }

  checkEvenOrOdd() {
    let inputs = this.state.userInput.split(','),
      evens = [],
      odds = [],
      i = 0;
    for (i; i < inputs.length; i++) {
      if (inputs[i] % 2 === 0) {
        evens.push(parseInt(inputs[i], 10));
      } else {
        odds.push(parseInt(inputs[i], 10));
      }
    }
    this.setState({
      evenArray: evens,
      oddArray: odds,
      userInput: ''
    });
  }

  render() {
    return (
      <div className="puzzleBox evenAndOddPB">
        <h4>Evens and Odds</h4>
        <input
          className="inputLine"
          value={this.state.userInput}
          onChange={e => this.handleUserInput(e.target.value)} />
        <button
          className="confirmationButton"
          onClick={() => this.checkEvenOrOdd()}
        >Check</button>
        <span className="resultsBox">Evens: {JSON.stringify(this.state.evenArray)}</span>
        <span className="resultsBox">Odds: {JSON.stringify(this.state.oddArray)}</span>
      </div>
    );
  }
}