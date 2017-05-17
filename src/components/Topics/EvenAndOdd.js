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

  handleChange(val) {
    this.setState({
      userInput: val
    })
  }

  handleClick(userInput) {
    userInput = userInput.split(',')
    const evens = [];
    const odds = [];
    for (var i = 0; i < userInput.length; i++) {
      if(userInput[i] % 2 === 0) {
        evens.push(parseInt(userInput[i], 10))
      } else {
        odds.push(parseInt(userInput[i], 10))
      }
    }
    this.setState({
      evenArray: evens,
      oddArray: odds
    })
  }

  render() {
    return (
      <div className="puzzleBox evenAndOddPB">
        <h4>Evens and Odds</h4>
        <input onChange={ e => this.handleChange(e.target.value) } type="" className="inputLine"/>
        <button onClick={ () => this.handleClick(this.state.userInput) } type="" className="confirmationButton">Split</button>
        <span className='resultsBox'> Evens: {JSON.stringify(this.state.evenArray)}</span><span className='resultsBox'>Odds: {JSON.stringify(this.state.oddArray)}</span>
      </div>
    )
  }
}
