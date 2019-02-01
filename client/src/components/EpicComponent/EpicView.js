import React from 'react';
import './EpicView.css';

const EpicView = () => {
  return (
    <div className='solar-system'>
      <div id="wrapper">
        <div id="sun"></div>

        <div className="circle-container1">
          <div id="mercury" className="circle"></div>
        </div>

        <div className="circle-container2">
          <div id="venus" className="circle"></div>
        </div>

        <div className="circle-container3">
          <div id="earth" className="circle"></div>
        </div>

        <div className="circle-container4">
          <div id="mars" className="circle"></div>
        </div>

        <div className="circle-container5">
          <div id="jupiter" className="circle"></div>
        </div>

        <div className="circle-container6">
          <div id="saturn" className="circle"></div>
          <div id="rings" className="circle"></div>
        </div>

        <div className="circle-container7">
          <div id="uranus" className="circle"></div>
        </div>

        <div className="circle-container8">
          <div id="neptune" className="circle"></div>
        </div>

        <div className="circle-container9">
          <div id="pluto" className="circle"></div>
        </div>
      </div>
    </div>
  );
};

export default EpicView;
