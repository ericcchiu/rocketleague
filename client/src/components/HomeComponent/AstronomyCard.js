import React from 'react';
import './AstronomyCard.css';

const AstronomyCard = (props) => {
  return (
    <div className='astronomycardbox'>
      <div className='astronomyDate'>{props.apodData.date}</div>
      <img src={props.apodData.url} />
      <p>Hello</p>
      <div id="descriptionbox">
        <p id="description">{props.apodData.explanation}</p>
      </div>
    </div>
  );
};
export default AstronomyCard; 