import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Header from './NavigationComponent/Header';
import Home from './HomeComponent/Home';
import Epic from './EpicComponent/Epic';
import './App.css';

class App extends Component {
  state = {
    weather: 'sunny',
    apodData: '',
    epicData: []
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
        console.log('Internal Error: Unable to retrieve APOD data', err)
      });

    axios.get('/api/epic')
      .then(epicData => {
        console.log(epicData.data);
        this.setState({
          epicData: epicData.data
        })
      })
      .catch(err => {
        axios.get('/api/apod')
          .then(apodData => {
            console.log(apodData.data);
            this.setState({
              apodData: apodData.data
            })
          })
          .catch(err => {
            console.log('Internal Error: Unable to retrieve APOD data', err)
          });
        console.log('Internal Error: Unable to retrieve APOD data', err)
      });
  }
  render() {
    return (
      <Router>
        <div className='App'>
          <Header />
          <Route
            exact path='/'
            render={(props) => <Home {...props} apodData={this.state.apodData} />}
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