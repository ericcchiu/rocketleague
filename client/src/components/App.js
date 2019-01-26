import React, { Component } from 'react';
import axios from 'axios';
import AstronomyCard from './AstronomyCard.js';

class App extends Component {
  state = {
    weather: 'sunny',
    apodData: ''
  }

  componentDidMount() {
    axios.get('/api/apod')
      .then(apodData => {
        console.log(apodData.data);
        this.setState({
          apodData: apodData.data
        })
      })
      .catch(err => {
        console.log('Internal Error: Unable to retrieve APOD data')
      });
  }
  render() {
    return (
      <div>
        <h1>Welcome to React</h1>
        <div condition={this.state.weather}>Testing</div>
        <AstronomyCard apodData={this.state.apodData}/>
      </div>
    );
  }
}

export default App;