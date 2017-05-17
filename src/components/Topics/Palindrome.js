import React, { Component } from 'react';

export default class Palindrome extends Component {
  constructor() {
    super();

    this.state = {
      userInput: '',
      palindrome: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    this.setState({
      userInput: e.target.value
    })
  }
  handleClick() {
    let pal = this.state.userInput.split('').reverse().join('');
    let flag = 'false';
    if (this.state.userInput === pal) {
      flag = 'true';
    }
    this.setState({
      palindrome: flag
    })
  }

  render() {
    return (
      <div className="puzzleBox filterStringPB">
        <h4>Palindrome</h4>
        <input onChange={this.handleChange} type="" className="inputLine"/>
        <button onClick={this.handleClick} type="" className="confirmationButton">Palindrome?</button>
        <span className="resultsBox">Palindrome: {this.state.palindrome}</span>
      </div>
    )
  }
}
