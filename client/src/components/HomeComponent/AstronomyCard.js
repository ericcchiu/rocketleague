import React from 'react';
import './AstronomyCard.css';

const AstronomyCard = (props) => {
  return (
    <div className='astronomy-container'>
      <div className='astronomy-cardbox'>
        <div className='date-item'>
          <div className='date'>{props.apodData.date}</div>
        </div>
        <div className='img-item'>
          <img src={props.apodData.url} />
        </div>
        <div className="description-item">
          <p id="description">{props.apodData.explanation}</p>
        </div>
      </div>
    </div>
  );
};
export default AstronomyCard; 