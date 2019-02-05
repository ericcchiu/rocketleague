import React from 'react';
import AstronomyCard from './AstronomyCard';
import MarsWeather from './MarsWeather';
import Clock from './Clock';

const Home = (props) => {
  return (
    <div className='HomeBox'>
      <AstronomyCard apodData={props.apodData} />
      <MarsWeather marsData={props.marsData} />
      <Clock />
    </div>
  );
};

export default Home;