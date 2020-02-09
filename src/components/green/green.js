import React from 'react';

import styles from './green.module.css';

const Green = props => {
  const height = props.posY * 1.97 - 1800 + 'px';
  const width = props.posY * 2.05 - 1875 + 'px';

  return (
    <div 
      className={styles.Green} 
      style={{ 
        height: height,
        width: width
       }}>
      {props.children}
    </div>
  )
};

export default Green;