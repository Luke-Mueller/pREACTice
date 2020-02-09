import React from 'react';

import styles from './blue.module.css';

const Blue = props => {
  const width = props.posY * 2.97 - 1500 + 'px';
  return (
    <div className={styles.Blue} style={{ width: width }}>
      {props.children}
    </div>
  )
};

export default Blue;