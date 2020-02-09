import React from 'react';

import './darkBlue.css';

const DarkBlue = props => {
  const height = props.posY * 2 - 2800 + 'px';
  const width = props.posY * 1.75 - 2875 + 'px';

  return (
    <div
      className="DarkBlue"
      style={{
        height: height,
        width: width
      }}>
      {props.children}
    </div>

  )
};

export default DarkBlue;