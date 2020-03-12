import React, { useContext } from 'react';

import PosYContext from '../../context/posY-context';

import styles from './green.module.css';

const Green = props => {
  const global = useContext(PosYContext);
  const height = global.posY * 1.97 - 1800 + 'px';
  const width = global.posY * 2.05 - 1875 + 'px';

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