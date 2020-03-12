import React, { useContext } from 'react';

import PosYContext from '../../../context/posY-context';

import X1 from '../../x/x1/x1';

import styles from '../white.module.css';
import positions from './white-top-left.module.css';

const WhiteUL = () => {
  const global = useContext(PosYContext);
  const className = `${styles.White} ${positions.top_left}`;
  let style;

  if (global.posY < 2500) {
    style = {
      height: 0,
      width: 0,
      top: 50 + '%',
      left: 50 + '%',
      border: 'none'
    }
  } else {
    style = {
      height: global.posY - 2500 + 'px',
      width: global.posY - 2500 + 'px',
    }
  }

  return (
    <div className={className} style={style}>
      <X1 />
    </div>
  )
};

export default WhiteUL; 