import React from 'react';
import AstronomyCard from './AstronomyCard';


const Home = (props) => {
  return (
    <div className='HomeBox'>
      <AstronomyCard apodData={props.apodData} />
    </div>
  );
};

export default Home;