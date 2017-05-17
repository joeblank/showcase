import React, { Component } from 'react';

export default class FilterString extends Component {
  constructor() {
    super();

    this.state = {
      strings: ['hey', 'hellow', 'no way', 'the store', 'food'],
      userInput: '',
      filtered: []
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.setState({userInput: e.target.value});
  }
  handleClick() {
    let filtered = this.state.strings.filter(str => str.includes(this.state.userInput))
    this.setState({filtered})
  }

  render() {
    return (
      <div className="puzzleBox filterStringPB">
        <h4>Filter String</h4>
        <span className="puzzleText">Random string array: {JSON.stringify(this.state.strings)}</span>
        <input onChange={this.handleChange} type="" className="inputLine"/>
        <button onClick={()=>this.handleClick()} type="" className="confirmationButton">Filter</button>
        <span className='resultsBox filterStringRB'>Filtered: {JSON.stringify(this.state.filtered)}</span>
      </div>
    )
  }
}
