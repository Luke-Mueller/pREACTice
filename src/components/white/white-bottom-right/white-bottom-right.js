import React from 'react';

import styles from '../white.module.css';
import positions from './white-bottom-right.module.css';

const WhiteBR = props => {
  const className = `${styles.White} ${positions.bottom_right}`;
  let style;

  if (props.posY < 2500) {
    style = {
      height: 0,
      width: 0,
      top: 50 + '%',
      left: 50 + '%',
      border: 'none'
    }
  } else {
    
    style = {
      height: props.posY - 2500 + 'px',
      width: props.posY - 2500 + 'px',
    }
  }

  return (
    <div
      className={className}
      style={ style }>
      {props.children}
    </div>
  )
};

export default WhiteBR; 