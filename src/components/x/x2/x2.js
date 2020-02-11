import React from 'react';

import './x2.css';

const X2 = props => {
  const clickHandler = e => {
    const className = e.target.className;
    console.log(className);
    if (className === "X2_Container") {
      e.target.className = "X2_Container active";
    } else {
      e.target.className = "X2_Container";
    }

  };

  return (
    <div className="X2_Container" onClick={clickHandler}>
      <div className="X2_Div"></div>
      <div className="X2_Div"></div>
      <div className="X2_Div"></div>
    </div>
  )
};

export default X2;