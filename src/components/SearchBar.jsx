import React, { Component } from 'react';
import './../App.css';

export class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
    };
  }

  //Ask how this works regarding form input. And how to filter product table?
  handleInputChange = (event) => {
    const $inputDomNode = event.target;

    const inputNameAttribute = $inputDomNode.name;
    const value = $inputDomNode.value;
    // const { name, value } = $inputDomNode;

    this.setState({
      [inputNameAttribute]: value,
    });
  };

  render() {
    return (
      <form>
        <label for="name">Search</label>
        <input
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleInputChange}
        />
      </form>
    );
  }
}

export default SearchBar;
