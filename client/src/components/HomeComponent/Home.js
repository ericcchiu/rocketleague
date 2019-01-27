import React from 'react';
import AstronomyCard from './AstronomyCard';


const Home = (props) => {
  return (
    <div>
      <h1>HomeComponent</h1>
      <AstronomyCard apodData={props.apodData} />
    </div>
  );
};

export default Home;