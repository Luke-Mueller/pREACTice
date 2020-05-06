import React from 'react';

import './beach.css';

const Beach = props => {
  return (
    <div className="Beach">
      {props.children}
    </div>
  )
};

export default Beach;
