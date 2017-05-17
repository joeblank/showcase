import React, { Component } from 'react';

export default class FilterObject extends Component {
  constructor() {
    super();

    this.state = {
      unFilteredArray: [
        {
          make: "Saturn",
          model: 'Astra'
        },{
          make: 'Chevy',
          year: 2017
        },{
          make: 'Subaru',
          color: 'Blue'
        },{
          make: 'Honda',
          rust: 'A lot!'
        }
      ],
      userInput: '',
      filteredArray: []
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(val) {
    this.setState({
      userInput: val
    })
  }

  handleClick() {
    let fil = this.state.unFilteredArray.filter(obj => obj.hasOwnProperty(this.state.userInput));
    this.setState({
      filteredArray: fil
    })
  }

  render() {
    return (
      <div className="puzzleBox filterObjectPB">
        <h4>Filter Object</h4>
        <span className='puzzleText'> Original: {JSON.stringify(this.state.unFilteredArray)}</span>
        <input onChange={(e)=> this.handleChange(e.target.value)} type="" className="inputLine"/>
        <button onClick={this.handleClick} type="" className="confirmationButton">Filter</button>
        <span className='resultsBox filterObjectRB'>Filtered: {JSON.stringify(this.state.filteredArray)}</span>
      </div>
    )
  }
}
