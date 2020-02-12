import React from 'react';

import './x4.css';

const X4 = () => {
  const clickHandler = e => {
    const className = e.target.className;
    if (className === "X4_Container") {
      e.target.className = "X4_Container active";
    } else {
      e.target.className = "X4_Container";
    }
  };

  return (
    <div className="X4_Container" onClick={clickHandler}>
      <div className="X4_Div"></div>
      <div className="X4_Div"></div>
      <div className="X4_Div"></div>
    </div>
  )
};

export default X4;