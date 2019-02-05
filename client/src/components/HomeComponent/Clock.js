import React from 'react';

const Clock = () => {
  let time = () => {
    return new Date().toLocaleTimeString();
  };
  return (
    <div>
      <div>{setInterval(time(), 1000)}</div>
    </div>
  );
};

export default Clock;
