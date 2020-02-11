import React from 'react';

import './x.css';

const X = props => {
  // const [isActive, setIsActive] = useState(false)
  // let style;
  // if (props.posY < 2500) {
  //   style = {

  //   }
  // }

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
      <div className="X_Div"></div>
      <div className="X_Div"></div>
      <div className="X_Div"></div>
    </div>
  )
};

export default X;