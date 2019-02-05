import React from 'react';
import './MarsWeather.css';

const MarsWeather = props => {
  return (
    <div className="MarsWeatherContainer">
      <div className="MarsWeatherBox">
        <div id='sol-day'>Sol: {props.marsData.sol}</div>
        <div id='max-temp'>Max-Temp: {props.marsData.max_temp + '°C'}</div>
        <div id='min-temp'>Min-Temp: {props.marsData.min_temp + '°C'}</div>
        <div id='condition'>Condition: {props.marsData.atmo_opacity}</div>
        <div id='location'>Location: {props.marsData.TX_Data}</div>
      </div>
    </div>
  );
};

export default MarsWeather;