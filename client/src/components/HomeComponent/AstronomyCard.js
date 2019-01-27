import React from 'react';

const AstronomyCard = (props) => {
  return (
    <div className='AstronomyCard'>
      <div className='AC_Date'>{props.apodData.date}</div>
      <img src={props.apodData.url} />
      <div className='AC_Explanation'>{props.apodData.explanation}</div>
    </div>
  );
};
export default AstronomyCard; 