import React, { useContext } from 'react';

import PosYContext from '../../../context/posY-context';

import X4 from '../../x/x4/x4';

import styles from '../white.module.css';
import positions from './white-bottom-right.module.css';

const WhiteBR = () => {
  const global= useContext(PosYContext);
  const className = `${styles.White} ${positions.bottom_right}`;
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
      <X4 />
    </div>
  )
};

export default WhiteBR; 