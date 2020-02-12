import React from 'react';

import './x3.css';

const X3 = () => {
  const clickHandler = e => {
    const className = e.target.className;
    if (className === "X3_Container") {
      e.target.className = "X3_Container active";
    } else {
      e.target.className = "X3_Container";
    }
  };

  return (
    <div className="X3_Container" onClick={clickHandler}>
      <div className="X3_Div"></div>
      <div className="X3_Div"></div>
      <div className="X3_Div"></div>
    </div>
  )
};

export default X3;