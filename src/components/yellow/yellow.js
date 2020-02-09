import React from 'react';

import styles from './yellow.module.css';

const Yellow = props => {
  return (
    <div className={styles.Yellow}>
      {props.children}
    </div>
  )
};

export default Yellow; 