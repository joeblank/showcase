import React, { Component } from 'react';

export default class Sum extends Component {
  constructor() {
    super();

    this.state = {
      number1: 0,
      number2: 0,
      sum: null
    }
    this.handleClick = this.handleClick.bind(this);
  }

  num1(val){
    this.setState({
      number1: val
    })
  }
  num2(val){
    this.setState({
      number2: val
    })
  }

  handleClick() {
    let num = parseInt(this.state.number2, 10) + parseInt(this.state.number1, 10);
    this.setState({
      sum: num
    })
  }

  render() {
    return (
      <div className="puzzleBox sumPB">
        <h4>Sum</h4>
        <input onChange={(e) => this.num1(e.target.value)} className="inputLine"/>
        <input onChange={(e) => this.num2(e.target.value)} className="inputLine"/>
        <button onClick={this.handleClick} type="" className="confirmationButton">Sum</button>
        <span className="resultsBox">Sum: {this.state.sum}</span>
      </div>
    )
  }
}
