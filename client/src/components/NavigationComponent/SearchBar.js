import React, { Component } from 'react';
import './searchicon.png';
class SearchBar extends Component {
  state = {
    query: '',
  }

  handleInputChange = () => {
    this.setState({
      query: this.search.value
    })
  }
  componentDidMount() {
    // GET request here

  }

  render() {
    return (

      <form>
        <input
          type="search"
          placeholder="Search for the skies"
          ref={input => this.search = input}
          onChange={this.handleInputChange}
        />
        <p>{this.state.query}</p>
      </form>
    );
  }
}

export default SearchBar
