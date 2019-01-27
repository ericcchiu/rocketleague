import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Header from './NavigationComponent/Header';
import Home from './HomeComponent/Home';

class App extends Component {
  state = {
    weather: 'sunny',
    apodData: '',
    epicData: ''
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
  }
  render() {
    return (
      <Router>
        <div className='App'>
          <Header />
          {/* <div conditison={this.state.weather}>Testing</div> */}
          {/* <AstronomyCard apodData={this.state.apodData} /> */}
          <Route
            exact path='/'
            render={(props) => <Home {...props} apodData={this.state.apodData} />}
          />
          {/* <Route
            exact path='/Epic'
            render={(props) ==> <EPIC {...props} epicData={this.state.epicData} />}
          /> */}
        </div>
      </Router>
    );
  }
}

export default App;