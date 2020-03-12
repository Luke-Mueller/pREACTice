import React from 'react';

import X3 from '../../x/x3/x3';

import styles from '../white.module.css';
import positions from './white-bottom-left.module.css';

const WhiteBL = props => {
  const className = `${styles.White} ${positions.bottom_left}`;
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
  };

  return (
    <div className={className} style={style}>
      <X3 />
    </div>
  )
};

export default WhiteBL; 