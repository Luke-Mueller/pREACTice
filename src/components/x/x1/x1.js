import React from 'react';

import './x1.css';

const X1 = () => {

  const clickHandler = e => {
    const className = e.target.className;
    console.log(className);
    if (className === "X_Container") {
      e.target.className = "X_Container active";
    } else {
      e.target.className = "X_Container";
    }
  };

  return (
    <div className="X_Container" onClick={clickHandler}>
      {/* <div className="X_Div"></div> */}
      {/* <div className="X_Div"></div> */}
      <div className="X_Div"></div>
    </div>
  )
};

export default X1;