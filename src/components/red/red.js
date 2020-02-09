import React from 'react';

import styles from './red.module.css';

const Red = props => {
  const width = props.posY * 2.1 + 'px';
  return (
    <div className={styles.Red} style={{ width: width }}>
      {props.children}
    </div>
  )
};

export default Red;