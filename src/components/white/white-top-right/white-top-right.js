import React, { useContext } from 'react';

import PosYContext from '../../../context/posY-context';

import X2 from '../../x/x2/x2';

import styles from '../white.module.css';
import positions from './white-top-right.module.css';

const White2 = () => {
  const global = useContext(PosYContext);
  const className = `${styles.White} ${positions.top_right}`;
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
      <X2 />
    </div>
  )
};

export default White2; 