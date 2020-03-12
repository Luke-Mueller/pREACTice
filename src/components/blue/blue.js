import React, { useContext } from 'react';

import PosYContext from '../../context/posY-context';

import styles from './blue.module.css';

const Blue = props => {
  const global = useContext(PosYContext);
  const width = global.posY * 2.97 - 1500 + 'px';
  
  return (
    <div className={styles.Blue} style={{ width: width }}>
      {props.children}
    </div>
  )
};

export default Blue;