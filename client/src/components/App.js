import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weather: 'sunny',
    };
  }

  render() {
    return (
      <div>
        <h1>Welcome to React</h1>
        <div condition={this.state.weather}>Testing</div>
      </div>
    );
  }
}

export default App;