import React, { Component } from 'react';
import EpicView from './EpicView';
import EpicList from './EpicList';

class Epic extends Component {
  state = {
    epicListData: []
  }
  componentDidMount() {
    this.setState({
      epicListData: this.props.epicData
    });
  }
  render() {
    console.log(this.state.epicListData)
    return (
      <div className='EpicBox'>
        <EpicView />
        <EpicList />
      </div>
    );
  }
}

export default Epic;