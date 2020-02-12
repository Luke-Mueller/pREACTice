import React from 'react';

import './x1.css';

const X1 = () => {
  const clickHandler = e => {
    const className = e.target.className;
    if (className === "X1_Container") {
      e.target.className = "X1_Container active";
    } else {
      e.target.className = "X1_Container";
    }
  };

  return (
    <div className="X1_Container" onClick={clickHandler}>
      <div className="X1_Div"></div>
      <div className="X1_Div"></div>
      <div className="X1_Div"></div>
    </div>
  )
};

export default X1;