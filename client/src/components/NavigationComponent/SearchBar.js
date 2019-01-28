import React, { Component } from 'react'

class SearchBar extends Component {
  state = {
    query: '',
  }

  handleInputChange = () => {
    this.setState({
      query: this.search.value
    })
  }

  render() {
    return (
      <form>
        <input
          placeholder="Search for the skies"
          ref={input => this.search = input}
          onChange={this.handleInputChange}
        />
        <p>{this.state.query}</p>
      </form>
    )
  }
}

export default SearchBar
