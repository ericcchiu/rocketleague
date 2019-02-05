import React, { Component } from 'react';
import axios from 'axios';
import '@babel/polyfill';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Header from './NavigationComponent/Header';
import Home from './HomeComponent/Home';
import Epic from './EpicComponent/Epic';
import './App.css';
import defaultApodData from '../data//apodData.json';
import defaultMarsData from '../data/marsWeather.json';

class App extends Component {
  state = {
    weather: 'sunny',
    apodData: defaultApodData[0],
    epicData: [],
    marsData: defaultMarsData[0]
  }

  setStateAsync(state) {
    return new Promise((resolve) => {
      this.setState(state, resolve)
    });
  }

  async componentDidMount() {

    let apodData = await axios.get('/api/apod');
    let marsData = await axios.get('/api/maas2');
    await this.setStateAsync({
      apodData: apodData.data,
      marsData: marsData.data
    });


  }
  render() {
    console.log(this.state.marsData);
    return (
      <Router>
        <div className='App'>
          <Header />
          <Route
            exact path='/'
            render={(props) => <Home {...props} apodData={this.state.apodData} marsData={this.state.marsData} />}
          />
          <Route
            exact path='/EPIC'
            render={(props) => <Epic {...props} epicData={this.state.epicData} />}
          />
        </div>
      </Router>
    );
  }
}

export default App;