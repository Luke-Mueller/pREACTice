import React, { useContext } from 'react';

import PosYContext from '../../context/posY-context';

import styles from './red.module.css';

const Red = props => {
  const global = useContext(PosYContext);
  const width = global.posY * 2.1 + 'px';
  return (
    <div className={styles.Red} style={{ width: width }}>
      {props.children}
    </div>
  )
};

export default Red;